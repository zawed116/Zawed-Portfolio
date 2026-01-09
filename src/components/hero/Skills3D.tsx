"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "DevOps",
  "Docker",
  "AWS",
  "AI/ML",
];

function SkillCloud() {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ mouse }) => {
    if (!group.current) return;
    group.current.rotation.y = mouse.x * 0.6;
    group.current.rotation.x = mouse.y * 0.3;
  });

  return (
    <group ref={group}>
      {SKILLS.map((skill, i) => {
        const angle = (i / SKILLS.length) * Math.PI * 2;
        const radius = 3.2;

        return (
          <Float key={skill} speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <Text
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.6,
                0,
              ]}
              fontSize={0.45}
              color="#6366F1"        // primary (looks good in both modes)
              anchorX="center"
              anchorY="middle"
            >
              {skill}
            </Text>
          </Float>
        );
      })}
    </group>
  );
}

export default function Skills3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={1.1} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <SkillCloud />
    </Canvas>
  );
}
