"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "AI", "ML"];

export default function SkillSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      {skills.map((skill, i) => (
        <Float key={i} speed={2} rotationIntensity={1}>
          <Text
            position={[
              Math.sin(i) * 3,
              Math.cos(i) * 2,
              0,
            ]}
            fontSize={0.5}
            color="#6366f1"
          >
            {skill}
          </Text>
        </Float>
      ))}
    </Canvas>
  );
}
