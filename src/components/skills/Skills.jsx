import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Skill icons
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaBootstrap,
	FaGitAlt,
	FaWordpress,
	FaPython,
} from "react-icons/fa";
import {
	SiMongodb,
	SiExpress,
	SiMui,
	SiRedux,
	SiFirebase,
	SiTypescript,
	SiMysql,
	SiAndroidstudio,
	SiOpenai,
} from "react-icons/si";

// Animated Skill Timeline Item Component
const SkillTimelineItem = ({ icon, name, level, isLeft, delay }) => {
	return (
		<Grid
			container
			spacing={2}
			sx={{
				mb: 3,
				position: "relative",
			}}>
			{/* Timeline Line */}
			<Box
				sx={{
					position: "absolute",
					left: "50%",
					top: 0,
					bottom: 0,
					width: "2px",
					backgroundColor: "rgba(0, 188, 212, 0.3)",
					transform: "translateX(-50%)",
					zIndex: 0,
				}}
			/>

			{/* Timeline Dot */}
			<Box
				component={motion.div}
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.5, delay }}
				sx={{
					position: "absolute",
					left: "50%",
					top: "20px",
					width: "16px",
					height: "16px",
					borderRadius: "50%",
					backgroundColor: "#00bcd4",
					transform: "translateX(-50%)",
					zIndex: 1,
					boxShadow: "0 0 15px rgba(0, 188, 212, 0.5)",
				}}
			/>

			{/* Content */}
			<Grid item xs={12} md={5.5} sx={{ order: isLeft ? 1 : 2 }}>
				<motion.div
					initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay }}>
					<Paper
						elevation={4}
						sx={{
							p: 2,
							borderRadius: "12px",
							background:
								"linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.9) 100%)",
							border: "1px solid rgba(255, 255, 255, 0.05)",
							backdropFilter: "blur(10px)",
							transition: "all 0.3s ease",
							"&:hover": {
								boxShadow: "0 10px 25px rgba(0, 188, 212, 0.3)",
								transform: "translateY(-3px)",
							},
						}}>
						<Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
							<Box
								sx={{
									fontSize: "2rem",
									mr: 1.5,
									color: "#00bcd4",
									filter: "drop-shadow(0 0 8px rgba(0, 188, 212, 0.5))",
								}}>
								{icon}
							</Box>
							<Box>
								<Typography
									variant='h6'
									component='h3'
									sx={{
										fontWeight: 600,
										fontSize: "1rem",
										fontFamily: "'Poppins', sans-serif",
									}}>
									{name}
								</Typography>
							</Box>
						</Box>

						{/* Skill Level Indicator */}
						<Box sx={{ width: "100%", mt: 0.5 }}>
							<Box
								sx={{
									height: "4px",
									width: "100%",
									backgroundColor: "rgba(255,255,255,0.1)",
									borderRadius: "2px",
									overflow: "hidden",
									position: "relative",
								}}>
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: `${level}%` }}
									transition={{ duration: 1, delay: delay + 0.3 }}
									style={{
										height: "100%",
										position: "absolute",
										left: 0,
										top: 0,
										backgroundColor: "#00bcd4",
										borderRadius: "2px",
									}}
								/>
							</Box>
							<Typography
								variant='body2'
								sx={{
									mt: 0.25,
									textAlign: "right",
									fontSize: "0.7rem",
									opacity: 0.7,
									fontFamily: "'Poppins', sans-serif",
								}}>
								{level}%
							</Typography>
						</Box>
					</Paper>
				</motion.div>
			</Grid>

			{/* Empty space for timeline */}
			<Grid item xs={12} md={1} sx={{ order: 2 }} />

			{/* Empty space on the other side */}
			<Grid item xs={12} md={5.5} sx={{ order: isLeft ? 3 : 1 }} />
		</Grid>
	);
};

// Animated Background Component
const AnimatedBackground = () => {
	return (
		<Box
			sx={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflow: "hidden",
				zIndex: -1,
			}}>
			{/* Grid Lines */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage:
						"linear-gradient(rgba(0, 188, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.05) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
					opacity: 0.5,
				}}
			/>

			{/* Animated Particles */}
			{[...Array(20)].map((_, index) => (
				<motion.div
					key={index}
					initial={{
						x: Math.random() * 100 - 50 + "%",
						y: Math.random() * 100 - 50 + "%",
						opacity: Math.random() * 0.5 + 0.1,
						scale: Math.random() * 0.6 + 0.2,
					}}
					animate={{
						x: [
							Math.random() * 100 - 50 + "%",
							Math.random() * 100 - 50 + "%",
							Math.random() * 100 - 50 + "%",
						],
						y: [
							Math.random() * 100 - 50 + "%",
							Math.random() * 100 - 50 + "%",
							Math.random() * 100 - 50 + "%",
						],
						opacity: [
							Math.random() * 0.5 + 0.1,
							Math.random() * 0.5 + 0.3,
							Math.random() * 0.5 + 0.1,
						],
					}}
					transition={{
						duration: Math.random() * 20 + 20,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						width: Math.random() * 10 + 5 + "px",
						height: Math.random() * 10 + 5 + "px",
						borderRadius: "50%",
						background: `rgba(0, 188, 212, ${Math.random() * 0.3 + 0.1})`,
						filter: "blur(1px)",
					}}
				/>
			))}
		</Box>
	);
};

const Skills = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	const skillsData = [
		{ name: "HTML", icon: <FaHtml5 />, level: 95, isLeft: true, delay: 0 },
		{ name: "CSS", icon: <FaCss3Alt />, level: 90, isLeft: false, delay: 0.1 },
		{ name: "JavaScript", icon: <FaJs />, level: 75, isLeft: true, delay: 0.1 },
		{ name: "React", icon: <FaReact />, level: 80, isLeft: false, delay: 0.2 },
		{
			name: "Node.js",
			icon: <FaNodeJs />,
			level: 60,
			isLeft: true,
			delay: 0.2,
		},
		{
			name: "Express",
			icon: <SiExpress />,
			level: 60,
			isLeft: false,
			delay: 0.3,
		},
		{
			name: "MongoDB",
			icon: <SiMongodb />,
			level: 60,
			isLeft: true,
			delay: 0.3,
		},
		{
			name: "Bootstrap",
			icon: <FaBootstrap />,
			level: 85,
			isLeft: false,
			delay: 0.4,
		},
		{
			name: "Material UI",
			icon: <SiMui />,
			level: 80,
			isLeft: true,
			delay: 0.4,
		},
		{ name: "Git", icon: <FaGitAlt />, level: 80, isLeft: false, delay: 0.5 },
		{
			name: "WordPress",
			icon: <FaWordpress />,
			level: 85,
			isLeft: true,
			delay: 0.5,
		},
		{
			name: "Python",
			icon: <FaPython />,
			level: 60,
			isLeft: false,
			delay: 0.6,
		},
		{
			name: "MySQL",
			icon: <SiMysql />,
			level: 90,
			isLeft: true,
			delay: 0.6,
		},
		{
			name: "Android Studio",
			icon: <SiAndroidstudio />,
			level: 65,
			isLeft: false,
			delay: 0.7,
		},
		{
			name: "ChatGPT",
			icon: <SiOpenai />,
			level: 80,
			isLeft: true,
			delay: 0.7,
		},
		{
			name: "Grok AI",
			icon: <SiOpenai />,
			level: 80,
			isLeft: false,
			delay: 0.75,
		},
	];

	return (
		<Box
			id='skills'
			ref={ref}
			component={motion.div}
			initial={{ opacity: 0 }}
			animate={inView ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 0.8 }}
			sx={{
				py: 10,
				position: "relative",
				overflow: "hidden",
			}}>
			{/* Animated Background */}
			<AnimatedBackground />

			<Container maxWidth='lg'>
				<Typography
					variant='h2'
					component='h2'
					align='center'
					sx={{
						mb: 6,
						fontFamily: "'Poppins', sans-serif",
						fontWeight: 700,
						fontSize: { xs: "2.5rem", md: "2.8rem" },
						color: "white",
					}}>
					Skills
				</Typography>

				<Box sx={{ position: "relative", mb: 4 }}>
					{skillsData.map((skill, index) => (
						<SkillTimelineItem
							key={index}
							icon={skill.icon}
							name={skill.name}
							level={skill.level}
							isLeft={skill.isLeft}
							delay={skill.delay}
						/>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Skills;
