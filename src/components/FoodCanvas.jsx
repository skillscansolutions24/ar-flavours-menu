import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float, ContactShadows } from '@react-three/drei';

function Model() {
  // Replace 'food_model.glb' with your actual filename in public folder
  const { scene } = useGLTF('/food_model.glb'); 
  return <primitive object={scene} scale={2.5} position={[0, -1, 0]} />;
}

export default function FoodCanvas() {
  return (
    <div style={{ height: '300px', width: '100%', marginBottom: '20px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Model />
          </Float>
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}