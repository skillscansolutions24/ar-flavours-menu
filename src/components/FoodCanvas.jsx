import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Float, 
  ContactShadows, 
  PerspectiveCamera,
  Environment,
  Html
} from '@react-three/drei';

// Loading Spinner for the 3D Model
function Loader() {
  return (
    <Html center>
      <div style={{ color: '#f97316', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>
        <div className="spinner" style={{ 
          border: '3px solid #f3f3f3', 
          borderTop: '3px solid #f97316', 
          borderRadius: '50%', 
          width: '20px', 
          height: '20px', 
          animation: 'spin 1s linear infinite',
          margin: '0 auto 10px'
        }}></div>
        SCANNING DISH...
      </div>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </Html>
  );
}

function Model({ url }) {
  const { scene } = useGLTF(url);
  return (
    <primitive 
      object={scene} 
      scale={2.2} 
      position={[0, -0.8, 0]} 
      rotation={[0, Math.PI / 4, 0]} 
    />
  );
}

const FoodCanvas = () => {
  // Direct link to a high-quality bowl model (Bowl of Ramen/Broth)
  const modelUrl = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bowl-broth/model.gltf';

  return (
    <div style={{ height: '100%', width: '100%', cursor: 'grab', position: 'relative' }}>
      <Canvas shadows dpr={[1, 2]}>
        {/* Cinematic Lighting */}
        <PerspectiveCamera makeDefault position={[0, 1.5, 4.5]} fov={40} />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 10, 5]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        
        {/* Soft Environment Reflections (Makes it look "Glossy") */}
        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          <Float 
            speed={1.5} 
            rotationIntensity={0.5} 
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
          >
            <Model url={modelUrl} />
          </Float>

          {/* This adds a realistic shadow on the "table" */}
          <ContactShadows 
            position={[0, -0.85, 0]} 
            opacity={0.5} 
            scale={10} 
            blur={2.5} 
            far={4} 
          />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          autoRotate={true} 
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2} 
        />
      </Canvas>

      {/* "New" Tag */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: '#f97316',
        color: 'white',
        padding: '4px 10px',
        borderRadius: '8px',
        fontSize: '10px',
        fontWeight: 'bold',
        pointerEvents: 'none',
        boxShadow: '0 4px 10px rgba(249, 115, 22, 0.3)'
      }}>
        3D PREVIEW
      </div>
    </div>
  );
};

export default FoodCanvas;