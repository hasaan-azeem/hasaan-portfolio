
import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { execSync } from "child_process";

// Pages included in sitemap.xml
// Keep these routes synchronized with src/App.tsx and scripts/prerender.mjs.
const PAGE_SOURCES: Record<string, string> = {
  "/": "src/pages/Home5Page.tsx",
  "/contact": "src/pages/ContactPage.tsx",
};

function git(cmd: string) {
  try {
    return execSync(`git ${cmd}`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return "";
  }
}

/**
 * Get published and modified dates from Git history.
 * Falls back to today's date if Git history is unavailable.
 */
function pageDates() {
  const today = new Date().toISOString().slice(0, 10);

  const out: Record<
    string,
    { published: string; modified: string }
  > = {};

  for (const [route, file] of Object.entries(PAGE_SOURCES)) {
    const log = git(`log --format=%cs -- ${file}`)
      .split("\n")
      .filter(Boolean);

    out[route] = {
      modified: log[0] || today,
      published: log[log.length - 1] || today,
    };
  }

  return out;
}

const SITEMAP_PATHS = [
  { path: "/", priority: "1.0" },
  { path: "/contact", priority: "0.6" },
];

function seoFiles(
  siteUrl: string,
  env: Record<string, string>,
  dates: ReturnType<typeof pageDates>
): Plugin {
  return {
    name: "seo-files",

    transformIndexHtml: {
      order: "pre",

      handler: (html) => {
        const verify = [
          env.VITE_GSC_VERIFICATION &&
            `<meta name="google-site-verification" content="${env.VITE_GSC_VERIFICATION}" />`,

          env.VITE_BING_VERIFICATION &&
            `<meta name="msvalidate.01" content="${env.VITE_BING_VERIFICATION}" />`,
        ]
          .filter(Boolean)
          .join("\n    ");

        return html
          .replaceAll("__SITE_URL__", siteUrl)
          .replace("<!--SEO_VERIFY-->", verify);
      },
    },

    generateBundle() {
      // Sitemap
      const urls = SITEMAP_PATHS.map(
        (p) => `
  <url>
    <loc>${siteUrl}${p.path === "/" ? "/" : p.path}</loc>
    <lastmod>${dates[p.path]?.modified ?? ""}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
      ).join("\n");

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
      });

      // Robots.txt
      const bots = [
        "GPTBot",
        "OAI-SearchBot",
        "ChatGPT-User",
        "ClaudeBot",
        "Claude-User",
        "Claude-SearchBot",
        "PerplexityBot",
        "Google-Extended",
        "Applebot-Extended",
        "CCBot",
      ];

      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *
Allow: /

# AI search and assistant crawlers are welcome
${bots
  .map((bot) => `User-agent: ${bot}\nAllow: /`)
  .join("\n\n")}

Sitemap: ${siteUrl}/sitemap.xml
`,
      });

      // llms.txt
      this.emitFile({
        type: "asset",
        fileName: "llms.txt",
        source: `# Hasaan Azeem

> Hasaan Azeem is a Full Stack Developer based in Pakistan. He builds web applications, business-focused digital products, ecommerce platforms, and AI-powered integrations and workflow automation solutions.

## Key pages

- [Home](${siteUrl}/): Professional introduction, technical expertise, selected projects, and development approach.
- [Contact](${siteUrl}/contact): Get in touch or book an appointment.

## Selected projects

- WebXGuard: Web application security assessment platform.
- Nordvia Exports: B2B apparel sourcing and export business website.
- Nexora ERP: ERP and POS application built with .NET and SQL Server.
- ShopSwift: MERN stack ecommerce application.

## Technical expertise

- Frontend: React, Next.js, JavaScript, TypeScript, Tailwind CSS.
- Backend: Node.js, Express.js, Python, FastAPI, Flask.
- Databases: MongoDB, PostgreSQL, MySQL, SQL Server.
- AI: OpenAI API, Claude API, Groq, LangChain, AI integrations.
- Automation: n8n, Make, Zapier, Vapi.
- Other: AWS fundamentals, Git, WordPress, WooCommerce, Flutter.

## Official profiles

- LinkedIn: https://www.linkedin.com/in/hasaan-azeem/
- GitHub: https://github.com/hasaan-azeem
- YouTube: https://www.youtube.com/@hasaan_azeem
- X: https://x.com/hasaan_azeem
- Instagram: https://www.instagram.com/autophile03/
`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const dates = pageDates();

  const siteUrl = (
    env.VITE_SITE_URL || "https://hasaan.netlify.app"
  ).replace(/\/+$/, "");

  return {
    plugins: [
      react(),
      seoFiles(siteUrl, env, dates),
    ],

    define: {
      __PAGE_DATES__: JSON.stringify(dates),
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom"],
            gsap: ["gsap"],
            swiper: ["swiper"],
          },
        },
      },
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      port: 5173,
      strictPort: true,
    },
  };
});
