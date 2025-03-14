import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, IconButton, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectCard3D from './ProjectCard3D';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Slider3D = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const canvasRef = useRef();
  const totalSlides = slides.length;
  
  // Handle navigation
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % totalSlides);
    setAutoRotate(false);
  };
  
  const prevSlide = () => {
    setActive((prev) => (prev - 1 + totalSlides) % totalSlides);
    setAutoRotate(false);
  };
  
  // Reset auto-rotate after user interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoRotate(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [active]);
  
  // Auto-rotate
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoRotate, totalSlides]);
  
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
      }}>
      {/* Slider Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "400px", md: "500px" },
          perspective: "1000px",
          mb: { xs: 2, md: 4 },
        }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transform: `rotateY(${active * (360 / totalSlides)}deg)`,
            }}>
            <ProjectCard3D
              project={slides[active]}
              index={active}
              active={active}
              setActive={setActive}
              totalProjects={totalSlides}
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: { xs: 2, md: 4 },
        }}>
        <IconButton
          onClick={prevSlide}
          sx={{
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(0, 188, 212, 0.2)",
            },
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
          }}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(0, 188, 212, 0.2)",
            },
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
          }}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Dots */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: { xs: 2, md: 4 },
        }}>
        {slides.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => setActive(index)}
            sx={{
              width: { xs: 8, md: 10 },
              height: { xs: 8, md: 10 },
              p: 0,
              minWidth: "auto",
              backgroundColor: active === index ? "primary.main" : "rgba(255, 255, 255, 0.2)",
              "&:hover": {
                backgroundColor: active === index ? "primary.main" : "rgba(255, 255, 255, 0.3)",
              },
            }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                transition: "all 0.3s ease",
              }}
            />
          </IconButton>
        ))}
      </Box>

      {/* Project Details */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={active}
        sx={{ 
          position: 'absolute',
          bottom: { xs: 80, md: 100 },
          left: 0,
          right: 0,
          textAlign: 'center',
          padding: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          margin: '0 auto',
          maxWidth: { xs: '90%', md: '60%' },
        }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 1 }}>
          {slides[active].title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          {slides[active].description}
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          endIcon={<OpenInNewIcon />}
          href={slides[active].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </Button>
      </Box>
    </Box>
  );
};

export default Slider3D; 