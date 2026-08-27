'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Sparkles, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Building3DProps {
  currentStage: number; // 0 to 5
  packageType?: 'Standard' | 'Premium' | 'Luxury';
  isWireframe?: boolean;
  autoRotate?: boolean;
}

function ProceduralVilla({ currentStage, packageType = 'Luxury', isWireframe = false }: Building3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Package color schemes
  const wallColors = {
    Standard: '#D9D7CE',
    Premium: '#E3DFD5',
    Luxury: '#F4EFE6'
  };

  const accentColors = {
    Standard: '#4A5568',
    Premium: '#06243A',
    Luxury: '#D9A441'
  };

  const wallColor = wallColors[packageType];
  const accentColor = accentColors[packageType];

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Subtle float animation
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* GROUND BASE & FOUNDATION GRID */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[12, 0.1, 10]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>
      
      {/* Stage 0: Excavation Site & Boundary Pins */}
      {currentStage >= 0 && (
        <group>
          {/* Grid Boundary Pins */}
          {[[-5.5, -4.5], [5.5, -4.5], [-5.5, 4.5], [5.5, 4.5]].map((pos, idx) => (
            <mesh key={idx} position={[pos[0], 0.4, pos[1]]}>
              <cylinderGeometry args={[0.06, 0.06, 0.8, 8]} />
              <meshStandardMaterial color="#D9A441" metalness={0.8} roughness={0.2} />
            </mesh>
          ))}
          {/* Site Markings */}
          <lineSegments position={[0, 0.01, 0]}>
            <edgesGeometry args={[new THREE.BoxGeometry(8.2, 0.02, 6.2)]} />
            <lineBasicMaterial color="#D9A441" linewidth={2} />
          </lineSegments>
        </group>
      )}

      {/* Stage 1: Concrete Footings & Steel Rebar Columns */}
      {currentStage >= 1 && (
        <group>
          {/* Footing Concrete Pads */}
          {[
            [-3.5, -2.5], [0, -2.5], [3.5, -2.5],
            [-3.5, 2.5], [0, 2.5], [3.5, 2.5]
          ].map((pos, i) => (
            <group key={i} position={[pos[0], 0.2, pos[1]]}>
              <mesh castShadow receiveShadow>
                <boxGeometry args={[1.2, 0.4, 1.2]} />
                <meshStandardMaterial color="#4A5568" roughness={0.9} wireframe={isWireframe} />
              </mesh>
              {/* Vertical Steel Rebars */}
              {[-0.3, 0.3].map((rx, rxi) => (
                [-0.3, 0.3].map((rz, rzi) => (
                  <mesh key={`${rxi}-${rzi}`} position={[rx, 0.8, rz]}>
                    <cylinderGeometry args={[0.02, 0.02, 1.2, 6]} />
                    <meshStandardMaterial color="#B8862C" metalness={0.9} roughness={0.1} />
                  </mesh>
                ))
              ))}
            </group>
          ))}
        </group>
      )}

      {/* Stage 2: Main RCC Skeleton Frame (Columns & Beams & Roof Slab) */}
      {currentStage >= 2 && (
        <group position={[0, 0, 0]}>
          {/* Structural RCC Columns Ground to 1st Floor */}
          {[
            [-3.8, -2.8], [0, -2.8], [3.8, -2.8],
            [-3.8, 2.8], [0, 2.8], [3.8, 2.8]
          ].map((pos, i) => (
            <mesh key={i} position={[pos[0], 1.6, pos[1]]} castShadow>
              <boxGeometry args={[0.5, 2.8, 0.5]} />
              <meshStandardMaterial color="#64748B" roughness={0.7} wireframe={isWireframe} />
            </mesh>
          ))}

          {/* First Floor Slab */}
          <mesh position={[0, 3.0, 0]} castShadow receiveShadow>
            <boxGeometry args={[8.4, 0.3, 6.4]} />
            <meshStandardMaterial color="#475569" roughness={0.8} wireframe={isWireframe} />
          </mesh>

          {/* First Floor Columns */}
          {[
            [-3.8, -2.8], [0, -2.8], [3.8, -2.8],
            [-3.8, 2.8], [3.8, 2.8]
          ].map((pos, i) => (
            <mesh key={`ff-${i}`} position={[pos[0], 4.3, pos[1]]} castShadow>
              <boxGeometry args={[0.45, 2.4, 0.45]} />
              <meshStandardMaterial color="#64748B" roughness={0.7} wireframe={isWireframe} />
            </mesh>
          ))}

          {/* Second Roof Slab */}
          <mesh position={[0, 5.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[8.8, 0.35, 6.8]} />
            <meshStandardMaterial color="#334155" roughness={0.8} wireframe={isWireframe} />
          </mesh>
        </group>
      )}

      {/* Stage 3: Brick Masonry Walls & Room Enclosures */}
      {currentStage >= 3 && (
        <group>
          {/* Ground Floor Exterior Brick Walls */}
          {/* Rear Wall */}
          <mesh position={[0, 1.6, -2.8]} castShadow>
            <boxGeometry args={[7.2, 2.7, 0.25]} />
            <meshStandardMaterial color="#9A3412" roughness={0.9} wireframe={isWireframe} />
          </mesh>
          {/* Side Walls */}
          <mesh position={[-3.8, 1.6, 0]} castShadow>
            <boxGeometry args={[0.25, 2.7, 5.4]} />
            <meshStandardMaterial color="#9A3412" roughness={0.9} wireframe={isWireframe} />
          </mesh>
          <mesh position={[3.8, 1.6, 0]} castShadow>
            <boxGeometry args={[0.25, 2.7, 5.4]} />
            <meshStandardMaterial color="#9A3412" roughness={0.9} wireframe={isWireframe} />
          </mesh>

          {/* First Floor Masonry */}
          <mesh position={[-1.8, 4.3, -2.8]} castShadow>
            <boxGeometry args={[3.8, 2.3, 0.25]} />
            <meshStandardMaterial color="#9A3412" roughness={0.9} wireframe={isWireframe} />
          </mesh>
          <mesh position={[-3.8, 4.3, 0]} castShadow>
            <boxGeometry args={[0.25, 2.3, 5.4]} />
            <meshStandardMaterial color="#9A3412" roughness={0.9} wireframe={isWireframe} />
          </mesh>
        </group>
      )}

      {/* Stage 4: Exterior Plastering, Windows, & Doors */}
      {currentStage >= 4 && (
        <group>
          {/* Plastered Walls with Smooth Luxury Finish */}
          <mesh position={[0, 1.6, -2.78]} castShadow>
            <boxGeometry args={[7.3, 2.72, 0.05]} />
            <meshStandardMaterial color={wallColor} roughness={0.4} wireframe={isWireframe} />
          </mesh>
          <mesh position={[-3.82, 1.6, 0]} castShadow>
            <boxGeometry args={[0.05, 2.72, 5.45]} />
            <meshStandardMaterial color={wallColor} roughness={0.4} wireframe={isWireframe} />
          </mesh>

          {/* Front Entrance Facade Wall with Accent Trim */}
          <mesh position={[1.8, 1.6, 2.8]} castShadow>
            <boxGeometry args={[3.8, 2.7, 0.25]} />
            <meshStandardMaterial color={wallColor} roughness={0.4} wireframe={isWireframe} />
          </mesh>

          {/* Glass Windows with Frames */}
          {/* Ground Floor Panoramic Glass Window */}
          <group position={[-1.8, 1.6, 2.8]}>
            <mesh castShadow>
              <boxGeometry args={[3.2, 1.8, 0.1]} />
              <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
              <planeGeometry args={[3.0, 1.6]} />
              <meshStandardMaterial color="#38BDF8" transparent opacity={0.5} roughness={0.1} metalness={0.9} />
            </mesh>
          </group>

          {/* First Floor Glass Window */}
          <group position={[1.8, 4.3, 2.8]}>
            <mesh castShadow>
              <boxGeometry args={[3.2, 1.6, 0.1]} />
              <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
              <planeGeometry args={[3.0, 1.4]} />
              <meshStandardMaterial color="#38BDF8" transparent opacity={0.5} roughness={0.1} metalness={0.9} />
            </mesh>
          </group>
        </group>
      )}

      {/* Stage 5: Completed Luxury Villa with Lights, Wood & Metallic Accents */}
      {currentStage >= 5 && (
        <group>
          {/* Teak Wood Main Door with Brass Handle */}
          <group position={[0.5, 1.2, 2.82]}>
            <mesh castShadow>
              <boxGeometry args={[1.2, 2.1, 0.08]} />
              <meshStandardMaterial color="#78350F" roughness={0.3} metalness={0.1} />
            </mesh>
            {/* Brass Handle */}
            <mesh position={[0.45, 0, 0.06]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color="#D9A441" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>

          {/* Gold Accent Pillars / Beams */}
          <mesh position={[-3.9, 1.6, 2.85]}>
            <boxGeometry args={[0.2, 2.8, 0.2]} />
            <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[3.9, 1.6, 2.85]}>
            <boxGeometry args={[0.2, 2.8, 0.2]} />
            <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.2} />
          </mesh>

          {/* First Floor Balcony Glass Railing */}
          <group position={[-1.8, 3.5, 2.8]}>
            <mesh position={[0, 0.4, 0]}>
              <boxGeometry args={[3.4, 0.8, 0.05]} />
              <meshStandardMaterial color="#7DD3FC" transparent opacity={0.4} roughness={0.1} metalness={0.9} />
            </mesh>
            {/* Stainless Steel Handrail */}
            <mesh position={[0, 0.82, 0]}>
              <boxGeometry args={[3.45, 0.05, 0.08]} />
              <meshStandardMaterial color="#E2E8F0" metalness={0.95} roughness={0.1} />
            </mesh>
          </group>

          {/* Architectural Roof Overhang Accent Lighting */}
          <mesh position={[0, 5.7, 0]} castShadow>
            <boxGeometry args={[9.2, 0.15, 7.2]} />
            <meshStandardMaterial color={accentColor} metalness={0.85} roughness={0.2} />
          </mesh>

          {/* Interior Warm Ambient Glow Pointlights */}
          <pointLight position={[-1.8, 1.8, 1.5]} intensity={2.5} color="#FDE047" distance={6} />
          <pointLight position={[1.8, 4.3, 1.5]} intensity={2.5} color="#FDE047" distance={6} />
          <pointLight position={[0.5, 1.5, 2.9]} intensity={1.5} color="#D9A441" distance={3} />

          {/* Landscaping Garden Planters */}
          <mesh position={[-3.2, 0.2, 4.0]}>
            <boxGeometry args={[1.8, 0.4, 0.8]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
          <mesh position={[-3.2, 0.5, 4.0]}>
            <sphereGeometry args={[0.4, 8, 8]} />
            <meshStandardMaterial color="#15803D" roughness={0.9} />
          </mesh>
        </group>
      )}
    </group>
  );
}

export default function Building3DScene({
  currentStage,
  packageType = 'Luxury',
  isWireframe = false,
  autoRotate = true
}: Building3DProps) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas3DWrapper
        currentStage={currentStage}
        packageType={packageType}
        isWireframe={isWireframe}
        autoRotate={autoRotate}
      />
    </div>
  );
}

function Canvas3DWrapper({
  currentStage,
  packageType,
  isWireframe,
  autoRotate
}: Building3DProps) {
  return (
    <React.Suspense fallback={<Building3DFallback currentStage={currentStage} packageType={packageType} />}>
      <DynamicCanvas
        currentStage={currentStage}
        packageType={packageType}
        isWireframe={isWireframe}
        autoRotate={autoRotate}
      />
    </React.Suspense>
  );
}

// Inner Canvas Component
import { Canvas } from '@react-three/fiber';

function DynamicCanvas({ currentStage, packageType, isWireframe, autoRotate }: Building3DProps) {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[9, 6, 11]} fov={45} />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={0.8}
        enablePan={true}
        enableZoom={true}
        minDistance={6}
        maxDistance={22}
        maxPolarAngle={Math.PI / 2 - 0.05}
      />

      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[12, 15, 10]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#06243A" />
      <spotLight position={[0, 15, 0]} intensity={1.2} color="#D9A441" angle={0.6} penumbra={0.8} />

      {/* Floating Sparkle Particles */}
      <Sparkles count={40} scale={12} size={3} speed={0.4} color="#D9A441" />

      {/* Procedural Villa Mesh */}
      <ProceduralVilla
        currentStage={currentStage}
        packageType={packageType}
        isWireframe={isWireframe}
      />

      {/* Reflective Ground Plane */}
      <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[0, 0]}
          resolution={256}
          mirror={0.3}
          mixBlur={0.5}
          mixStrength={1.0}
          roughness={0.8}
          depthScale={1.0}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#11161d"
          metalness={0.4}
        />
      </mesh>
    </Canvas>
  );
}

function Building3DFallback({ currentStage, packageType }: { currentStage: number; packageType?: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0F1A] to-[#06243A] text-center p-6 rounded-2xl border border-[#D9A441]/20">
      <div className="w-20 h-20 rounded-full border-2 border-[#D9A441] border-t-transparent animate-spin mb-4" />
      <h3 className="text-xl font-bold text-amber-300">Rendering 3D BIM Model...</h3>
      <p className="text-sm text-slate-400 mt-2">Stage {currentStage} • {packageType} Specifications</p>
    </div>
  );
}
