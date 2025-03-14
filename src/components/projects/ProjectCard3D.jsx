import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';

const ProjectCard3D = ({ project, index, active, setActive, totalProjects }) => {
  const theme = useTheme();
  const meshRef = useRef();
  const textRef = useRef();
  
  // Calculate position based on index and active state
  const theta = (2 * Math.PI) / totalProjects;
  const radius = 4;
  
  // Calculate the target rotation
  const targetRotation = active === index ? 0 : (index - active) * theta;
  
  // Load texture
  const texture = useTexture(project.image);
  
  useFrame(() => {
    if (meshRef.current) {
      // Smooth rotation to target position
      meshRef.current.rotation.y = meshRef.current.rotation.y * 0.92 + targetRotation * 0.08;
      
      // Calculate position based on rotation
      meshRef.current.position.x = Math.sin(meshRef.current.rotation.y) * radius;
      meshRef.current.position.z = Math.cos(meshRef.current.rotation.y) * radius;
      
      // Always face the camera
      meshRef.current.lookAt(0, 0, 0);
    }
  });
  
  const isActive = active === index;
  
  return (
    <motion.group
      ref={meshRef}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      position={[Math.sin(index * theta) * radius, 0, Math.cos(index * theta) * radius]}
      onClick={() => setActive(index)}
    >
      <motion.mesh
        animate={{
          scale: isActive ? 1.2 : 1,
          y: isActive ? 0.2 : 0,
        }}
        transition={{ duration: 0.5 }}
        castShadow
      >
        {/* Card background */}
        <boxGeometry args={[2, 1.2, 0.05]} />
        <meshStandardMaterial 
          color={isActive ? theme.palette.primary.main : theme.palette.background.paper} 
          metalness={0.5}
          roughness={0.3}
        />
        
        {/* Project image */}
        <mesh position={[0, 0.2, 0.03]}>
          <planeGeometry args={[1.8, 0.8]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
        
        {/* Project title */}
        <Text
          ref={textRef}
          position={[0, -0.4, 0.03]}
          fontSize={0.12}
          maxWidth={1.8}
          textAlign="center"
          color={isActive ? "#ffffff" : theme.palette.primary.main}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Roboto_Regular.json"
        >
          {project.title}
        </Text>
        
        {/* Glow effect for active card */}
        {isActive && (
          <mesh position={[0, 0, -0.01]}>
            <boxGeometry args={[2.1, 1.3, 0.01]} />
            <meshBasicMaterial 
              color={theme.palette.primary.main} 
              transparent 
              opacity={0.3} 
            />
          </mesh>
        )}
      </motion.mesh>
    </motion.group>
  );
};

export default ProjectCard3D; 