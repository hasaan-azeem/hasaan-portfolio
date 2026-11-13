import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, type RefObject } from "react";

type FragmentProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  speed: number;
  phase: number;
  geometry: "icosahedron" | "octahedron" | "tetrahedron" | "box";
  accent?: boolean;
  reducedMotion: boolean;
};

const FRAGMENTS: Omit<FragmentProps, "reducedMotion">[] = [
  { position: [-3.8, 1.4, -1], rotation: [0.4, 0.2, 0.5], scale: [0.65, 0.9, 0.3], speed: 0.3, phase: 0, geometry: "icosahedron" },
  { position: [-4.5, -0.7, 0], rotation: [0.2, 0.8, 0.1], scale: [0.8, 0.5, 0.4], speed: 0.4, phase: 2, geometry: "octahedron", accent: true },
  { position: [-2.8, -1.9, -1.5], rotation: [0.8, 0.2, 0.6], scale: [0.4, 0.8, 0.3], speed: 0.5, phase: 1, geometry: "tetrahedron" },
  { position: [-1.9, 1.9, -2], rotation: [0.3, 0.4, 0.8], scale: [0.35, 0.5, 0.35], speed: 0.3, phase: 3, geometry: "box" },
  { position: [2.8, 1.8, -1], rotation: [0.5, 0.3, 0.2], scale: [0.65, 0.4, 0.4], speed: 0.4, phase: 1, geometry: "octahedron", accent: true },
  { position: [4.1, 0.8, -1.5], rotation: [0.4, 0.7, 0.3], scale: [0.8, 0.5, 0.3], speed: 0.3, phase: 2, geometry: "icosahedron" },
  { position: [4.3, -1.1, -0.5], rotation: [0.3, 0.4, 0.7], scale: [0.5, 0.75, 0.3], speed: 0.5, phase: 4, geometry: "tetrahedron", accent: true },
  { position: [2.9, -2, -2], rotation: [0.7, 0.2, 0.3], scale: [0.6, 0.4, 0.4], speed: 0.3, phase: 3, geometry: "box" },
  { position: [-5, 2.2, -2], rotation: [0.2, 0.5, 0.8], scale: [0.3, 0.5, 0.3], speed: 0.6, phase: 5, geometry: "tetrahedron" },
  { position: [5.1, 2.1, -2], rotation: [0.6, 0.3, 0.2], scale: [0.4, 0.6, 0.3], speed: 0.4, phase: 2, geometry: "octahedron" },
];

function GeometricFragment({
  position,
  rotation,
  scale,
  speed,
  phase,
  geometry,
  accent = false,
  reducedMotion,
}: FragmentProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh || reducedMotion) return;

    const time = state.clock.elapsedTime + phase;
    mesh.rotation.x += delta * speed * 0.35;
    mesh.rotation.y += delta * speed * 0.5;
    mesh.rotation.z += delta * speed * 0.2;
    mesh.position.y = initialY + Math.sin(time * 0.55) * 0.12;
    mesh.position.x = position[0] + Math.sin(time * 0.3) * 0.035;
  });

  const materialColor = accent ? "#384b39" : "#252b29";

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
      {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
      {geometry === "tetrahedron" && <tetrahedronGeometry args={[1, 0]} />}
      {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
      <meshPhysicalMaterial
        color={materialColor}
        metalness={0.92}
        roughness={accent ? 0.2 : 0.27}
        clearcoat={1}
        clearcoatRoughness={0.12}
        envMapIntensity={1.5}
        flatShading
      />
      <lineSegments>
        <edgesGeometry
          attach="geometry"
          args={[new THREE.IcosahedronGeometry(1, 0)]}
        />
        <lineBasicMaterial
          color={accent ? "#a6ffb1" : "#89918b"}
          transparent
          opacity={accent ? 0.48 : 0.2}
        />
      </lineSegments>
    </mesh>
  );
}

function FragmentScene({ reducedMotion }: { reducedMotion: boolean }) {
  const sceneRef = useRef<THREE.Group>(null);
  const target = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    const scene = sceneRef.current;
    if (!scene || reducedMotion) return;

    target.current.set(state.pointer.x * 0.16, state.pointer.y * 0.12);
    scene.rotation.y = THREE.MathUtils.damp(scene.rotation.y, target.current.x, 2, delta);
    scene.rotation.x = THREE.MathUtils.damp(scene.rotation.x, -target.current.y, 2, delta);
    scene.position.x = THREE.MathUtils.damp(scene.position.x, target.current.x * 0.35, 2, delta);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-4, 5, 5]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[5, 2, -2]} intensity={2.8} color="#a6ffb1" />
      <pointLight position={[0, -3, 3]} intensity={3} distance={12} color="#8aff9b" />
      <pointLight position={[-5, 0, 2]} intensity={2} distance={10} color="#c4d8c8" />
      <group ref={sceneRef}>
        {FRAGMENTS.map((fragment, index) => (
          <GeometricFragment key={index} {...fragment} reducedMotion={reducedMotion} />
        ))}
      </group>
    </>
  );
}

export default function HeroThreeScene({
  reducedMotion,
  sectionRef,
}: {
  reducedMotion: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <div className="ch__three" aria-hidden="true">
      <Canvas
        eventSource={sectionRef}
        eventPrefix="client"
        camera={{ position: [0, 0, 9], fov: 42 }}
        dpr={[1, 1.25]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <FragmentScene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
