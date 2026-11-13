
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { email } = req.body;

    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({ error: "Please enter a valid email." });
    }

    const cvUrl = process.env.CV_FILE_URL;

    if (!cvUrl) {
      throw new Error("CV file URL is not configured.");
    }

    const cvResponse = await fetch(cvUrl);

    if (!cvResponse.ok) {
      throw new Error("Unable to retrieve the CV file.");
    }

    const cvBuffer = Buffer.from(await cvResponse.arrayBuffer());

    const { error } = await resend.emails.send({
      from: process.env.CV_FROM_EMAIL!,
      to: email,
      subject: "Hasaan Azeem | Resume",
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.7;">
          <h2>Hi there,</h2>
          <p>Thank you for your interest in my professional profile.</p>
          <p>I've attached my latest resume for your review.</p>
          <p>Feel free to reach out if you'd like to discuss an opportunity.</p>
          <p>Best regards,<br><strong>Hasaan Azeem</strong></p>
          <p>
            <a href="https://hasaanazeem.vercel.app">
              Visit my portfolio
            </a>
          </p>
        </div>
      `,
      attachments: [
        {
          filename: "Hasaan-Azeem-Resume.pdf",
          content: cvBuffer,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        error: "Unable to send your resume right now.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume sent successfully.",
    });
  } catch (error) {
    console.error("CV email error:", error);

    return res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
}
