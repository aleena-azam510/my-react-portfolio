import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';

function Core() {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.12;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12;
  });
  return (
    <Float speed={1.25} rotationIntensity={0.24} floatIntensity={0.55}>
      <mesh ref={mesh} scale={1.52}>
        <icosahedronGeometry args={[1, 18]} />
        <MeshDistortMaterial color="#7557ff" emissive="#25105f" emissiveIntensity={0.65}
          roughness={0.19} metalness={0.72} distort={0.34} speed={1.35} />
      </mesh>
      <mesh scale={2.12} rotation={[0.8, 0.2, 0.4]}>
        <torusGeometry args={[1.5, 0.012, 12, 180]} />
        <meshBasicMaterial color="#62e8ff" transparent opacity={0.8} />
      </mesh>
      <mesh scale={2.34} rotation={[1.15, 0.8, -0.3]}>
        <torusGeometry args={[1.5, 0.008, 10, 180]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.65} />
      </mesh>
    </Float>
  );
}

export default function Scene({ compact = false }) {
  return (
    <div className={compact ? 'scene scene-compact' : 'scene'}>
      <Canvas camera={{ position: [0, 0, 6.4], fov: 42 }} dpr={[1, 1.7]}>
        <ambientLight intensity={0.85} />
        <pointLight position={[4, 3, 4]} intensity={24} color="#8b7bff" />
        <pointLight position={[-4, -2, 2]} intensity={14} color="#35d9ff" />
        <Suspense fallback={null}>
          <Core />
          <Stars radius={75} depth={45} count={compact ? 700 : 1500} factor={3} saturation={0.3} fade speed={0.35} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.22}
          minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.7} />
      </Canvas>
    </div>
  );
}
