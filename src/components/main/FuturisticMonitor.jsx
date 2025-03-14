import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';
import * as THREE from 'three';

// Floating Code Component
const FloatingCode = () => {
  const theme = useTheme();
  const codeRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    codeRef.current.rotation.x = Math.sin(t / 4) / 8;
    codeRef.current.rotation.y = Math.sin(t / 4) / 8;
    codeRef.current.rotation.z = Math.sin(t / 10) / 20;
  });

  // Create code-like geometry
  const codeLines = [];
  for (let i = 0; i < 10; i++) {
    const lineLength = Math.random() * 1.5 + 0.5;
    codeLines.push(
      <mesh 
        key={i} 
        position={[
          (Math.random() - 0.5) * 2, 
          -i * 0.2 + 1, 
          (Math.random() - 0.5) * 0.5
        ]}
      >
        <boxGeometry args={[lineLength, 0.05, 0.05]} />
        <meshStandardMaterial color={i % 3 === 0 ? theme.palette.primary.main : i % 2 === 0 ? theme.palette.secondary.main : '#ffffff'} />
      </mesh>
    );
  }

  return (
    <group ref={codeRef}>
      {codeLines}
    </group>
  );
};

// Floating Particles
const Particles = ({ count = 200 }) => {
  const theme = useTheme();
  const mesh = useRef();
  const positions = useRef(new Float32Array(count * 3));
  const speeds = useRef(Array.from({ length: count }, () => ({
    speed: Math.random() * 0.01 + 0.002,
    direction: Math.random() > 0.5 ? 1 : -1
  })));
  
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions.current[i3] = (Math.random() - 0.5) * 10;
      positions.current[i3 + 1] = (Math.random() - 0.5) * 10;
      positions.current[i3 + 2] = (Math.random() - 0.5) * 10;
    }
  }, [count]);
  
  useFrame(() => {
    if (!mesh.current) return;
    
    const positionArray = mesh.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const particle = speeds.current[i];
      
      positionArray[i3 + 1] += particle.speed * particle.direction;
      
      if (positionArray[i3 + 1] > 5 || positionArray[i3 + 1] < -5) {
        particle.direction *= -1;
      }
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color={theme.palette.primary.main} 
        transparent 
        opacity={0.8}
        sizeAttenuation 
      />
    </points>
  );
};

// Floating Text
const FloatingText = () => {
  const theme = useTheme();
  const textRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    textRef.current.position.y = Math.sin(t / 2) * 0.1;
  });
  
  return (
    <group ref={textRef} position={[0, 0, 0]}>
      <Center>
        <Text
          font="/fonts/Roboto_Regular.json"
          fontSize={0.5}
          color={theme.palette.primary.main}
          anchorX="center"
          anchorY="middle"
        >
          {'<CODE/>'}
        </Text>
      </Center>
    </group>
  );
};

// Main 3D Scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <FloatingCode />
      </Float>
      <Particles />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <FloatingText />
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const FuturisticMonitor = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ 
        width: '100%', 
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, rgba(0,0,0,0.8) 0%, rgba(18,18,18,0.9) 100%)',
        boxShadow: '0 8px 32px 0 rgba(0, 188, 212, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box sx={{ 
        width: '100%', 
        height: '100%',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }
      }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene />
        </Canvas>
      </Box>
    </motion.div>
  );
};

export default FuturisticMonitor; 