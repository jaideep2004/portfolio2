import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
	Box,
	Typography,
	Container,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	IconButton,
	InputAdornment,
	Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Futuristic Carousel Component
const FuturisticCarousel = ({ slides }) => {
	const [active, setActive] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const totalSlides = slides.length;

	const nextSlide = () => {
		setActive((prev) => (prev + 1) % totalSlides);
	};

	const prevSlide = () => {
		setActive((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	// Auto-rotate slides
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, [isPaused]);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: { xs: "500px", md: "600px" },
			}}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}>
			{/* Main Display */}
			<Box
				sx={{
					width: "100%",
					height: "100%",
					borderRadius: "12px",
					overflow: "hidden",
					background:
						"linear-gradient(145deg, rgba(0,0,0,0.8) 0%, rgba(18,18,18,0.9) 100%)",
					boxShadow: "0 8px 32px 0 rgba(0, 188, 212, 0.3)",
					border: "1px solid rgba(255, 255, 255, 0.1)",
					position: "relative",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				{/* Background Grid */}
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundImage:
							"linear-gradient(rgba(0, 188, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.05) 1px, transparent 1px)",
						backgroundSize: "20px 20px",
						opacity: 0.5,
					}}
				/>

				{/* Animated Glow Effect */}
				<Box
					component={motion.div}
					animate={{
						boxShadow: [
							"0 0 20px rgba(0, 188, 212, 0.3)",
							"0 0 40px rgba(0, 188, 212, 0.2)",
							"0 0 20px rgba(0, 188, 212, 0.3)",
						],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "80%",
						height: "80%",
						borderRadius: "12px",
						transform: "translate(-50%, -50%)",
						zIndex: 0,
					}}
				/>

				{/* Carousel Items */}
				<Box
					sx={{ width: "80%", height: "80%", position: "relative", zIndex: 1 }}>
					{slides.map((slide, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
							animate={{
								opacity: index === active ? 1 : 0,
								scale: index === active ? 1 : 0.8,
								rotateY: index === active ? 0 : 90,
								x: index === active ? 0 : index < active ? -100 : 100,
							}}
							transition={{ duration: 0.5 }}
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								padding: "20px",
							}}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									background: "rgba(30,30,30,0.8)",
									border: "1px solid rgba(255, 255, 255, 0.05)",
									borderRadius: "16px",
									overflow: "hidden",
									transition: "all 0.3s ease",
									position: "relative",
									"&:hover": {
										boxShadow: "0 10px 25px rgba(0, 188, 212, 0.3)",
										transform: "translateY(-8px)",
										"& .MuiCardMedia-root": {
											transform: "scale(1.05)",
										},
									},
									"&::before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										background: "linear-gradient(180deg, rgba(0,188,212,0) 0%, rgba(0,188,212,0.1) 100%)",
										opacity: 0,
										transition: "opacity 0.3s ease",
										zIndex: 1,
									},
									"&:hover::before": {
										opacity: 1,
									},
									"@media (min-width: 900px)": {
										width: "100%",
										maxWidth: "600px",
										backgroundColor: "rgba(18, 18, 18, 0.7)",
										backdropFilter: "blur(10px)",
										border: "1px solid rgba(255, 255, 255, 0.1)",
										transform: "translateZ(0)",
										willChange: "transform",
										"&:hover": {
											boxShadow: "0 0 40px rgba(0, 188, 212, 0.4)",
											transform: "translateY(-8px) translateZ(0)",
										},
									}
								}}>
								<CardMedia
									component='img'
									height='200'
									image={slide.image}
									alt={slide.title}
									sx={{
										transition: "transform 0.3s ease",
										"&::after": {
											content: '""',
											position: "absolute",
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
											background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
											opacity: 0,
											transition: "opacity 0.3s ease",
										},
										"&:hover::after": {
											opacity: 1,
										},
										"@media (min-width: 900px)": {
											objectFit: "contain",
											filter: "brightness(0.9)",
											"&:hover": {
												filter: "brightness(1.1)",
												transform: "scale(1.03)",
											},
										}
									}}
								/>
								<CardContent
									sx={{
										flexGrow: 1,
										display: "flex",
										flexDirection: "column",
										p: { xs: 2, md: 3 },
										overflow: "auto",
										"&::-webkit-scrollbar": {
											width: "4px",
										},
										"&::-webkit-scrollbar-track": {
											background: "rgba(255,255,255,0.1)",
											borderRadius: "2px",
										},
										"&::-webkit-scrollbar-thumb": {
											background: "#00bcd4",
											borderRadius: "2px",
										},
										"@media (min-width: 900px)": {
											position: "relative",
											zIndex: 1,
											"&::-webkit-scrollbar": {
												width: "6px",
											},
											"&::-webkit-scrollbar-track": {
												background: "rgba(255, 255, 255, 0.1)",
												borderRadius: "3px",
											},
											"&::-webkit-scrollbar-thumb": {
												background: "rgba(0, 188, 212, 0.5)",
												borderRadius: "3px",
												"&:hover": {
													background: "rgba(0, 188, 212, 0.7)",
												},
											},
										}
									}}>
									<Typography
										variant='h5'
										component='h3'
										sx={{
											fontFamily: "'Poppins', sans-serif",
											fontWeight: 600,
											fontSize: { xs: "1.2rem", md: "1.5rem" },
											color: "white",
											mb: 1,
											textShadow: "0 2px 4px rgba(0,0,0,0.3)",
											"@media (min-width: 900px)": {
												color: "#00bcd4",
												fontSize: "1.8rem",
												textShadow: "0 0 10px rgba(0, 188, 212, 0.3)",
											}
										}}>
										{slide.title}
									</Typography>
									<Typography
										variant='body2'
										sx={{
											fontFamily: "'Poppins', sans-serif",
											fontSize: { xs: "0.85rem", md: "1rem" },
											color: "rgba(255,255,255,0.8)",
											mb: 2,
											lineHeight: 1.6,
											"@media (min-width: 900px)": {
												color: "text.secondary",
												fontSize: "1rem",
											}
										}}>
										{slide.description}
									</Typography>
									{slide.technologies && slide.technologies.length > 0 && (
										<Box
											sx={{
												display: "flex",
												flexWrap: "wrap",
												gap: 1,
												mb: 2,
											}}>
											{slide.technologies.map((tech, index) => (
												<Chip
													key={index}
													label={tech}
													size="small"
													sx={{
														backgroundColor: "rgba(0, 188, 212, 0.1)",
														color: "#00bcd4",
														fontFamily: "'Poppins', sans-serif",
														fontSize: { xs: "0.7rem", md: "0.75rem" },
														"&:hover": {
															backgroundColor: "rgba(0, 188, 212, 0.2)",
														},
													}}
												/>
											))}
										</Box>
									)}
								</CardContent>
								<CardActions
									sx={{
										p: { xs: 1.5, md: 2 },
										background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
										display: "flex",
										justifyContent: "flex-end",
										"@media (min-width: 900px)": {
											justifyContent: "center",
											pb: 2,
											pt: 0,
											background: "linear-gradient(to bottom, transparent, rgba(18, 18, 18, 0.9))",
											position: "relative",
											zIndex: 2,
										}
									}}>
									<Button
										href={slide.link}
										target='_blank'
										rel='noopener noreferrer'
										variant='contained'
										sx={{
											background: "linear-gradient(45deg, #00bcd4, #00e5ff)",
											color: "white",
											fontFamily: "'Poppins', sans-serif",
											fontSize: { xs: "0.8rem", md: "0.875rem" },
											textTransform: "none",
											px: { xs: 2, md: 3 },
											py: { xs: 0.5, md: 0.75 },
											position: "relative",
											overflow: "hidden",
											"&::before": {
												content: '""',
												position: "absolute",
												top: 0,
												left: "-100%",
												width: "100%",
												height: "100%",
												background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
												transition: "0.5s",
											},
											"&:hover::before": {
												left: "100%",
											},
											"&:hover": {
												transform: "translateY(-2px)",
												boxShadow: "0 5px 15px rgba(0, 188, 212, 0.4)",
											},
											"@media (min-width: 900px)": {
												borderRadius: "8px",
												px: 3,
												background: "linear-gradient(90deg, #00bcd4, #7c4dff)",
												transition: "all 0.3s ease",
												"&:hover": {
													transform: "translateY(-3px)",
													boxShadow: "0 10px 20px rgba(0, 188, 212, 0.3)",
												},
											}
										}}>
										View Project
									</Button>
								</CardActions>
							</Card>
						</motion.div>
					))}
				</Box>
			</Box>

			{/* Navigation Controls */}
			<Box
				sx={{
					position: "absolute",
					bottom: 5,
					left: 0,
					right: 0,
					display: "flex",
					justifyContent: "center",
					gap: 2,
				}}>
				<IconButton
					onClick={prevSlide}
					sx={{
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						color: "#00bcd4",
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.7)",
							transform: "scale(1.1)",
						},
						transition: "all 0.3s ease",
					}}>
					<ArrowBackIosNewIcon />
				</IconButton>
				<IconButton
					onClick={nextSlide}
					sx={{
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						color: "#00bcd4",
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.7)",
							transform: "scale(1.1)",
						},
						transition: "all 0.3s ease",
					}}>
					<ArrowForwardIosIcon />
				</IconButton>
			</Box>

			{/* Pagination Indicators */}
			<Box
				sx={{
					position: "absolute",
					bottom: 60,
					left: 0,
					right: 0,
					display: "flex",
					justifyContent: "center",
					gap: 1,
				}}>
				{slides.map((_, index) => (
					<Box
						key={`indicator-${index}`}
						onClick={() => setActive(index)}
						sx={{
							width: 8,
							height: 8,
							borderRadius: "50%",
							backgroundColor:
								index === active ? "#00bcd4" : "rgba(255, 255, 255, 0.3)",
							cursor: "pointer",
							transition: "all 0.3s ease",
							"&:hover": {
								backgroundColor:
									index === active ? "#00bcd4" : "rgba(255, 255, 255, 0.5)",
								transform: "scale(1.2)",
							},
						}}
					/>
				))}
			</Box>
		</Box>
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
			{/* Animated Gradient Background */}
			<Box
				component={motion.div}
				animate={{
					background: [
						"linear-gradient(45deg, rgba(0, 188, 212, 0.05), rgba(124, 77, 255, 0.05))",
						"linear-gradient(45deg, rgba(124, 77, 255, 0.05), rgba(0, 188, 212, 0.05))",
					],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "linear",
				}}
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
				}}
			/>

			{/* Grid Lines */}
			<Box
				component={motion.div}
				animate={{
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage:
						"linear-gradient(rgba(0, 188, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.05) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>

			{/* Floating Elements */}
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
						scale: [
							Math.random() * 0.6 + 0.2,
							Math.random() * 0.6 + 0.4,
							Math.random() * 0.6 + 0.2,
						],
					}}
					transition={{
						duration: Math.random() * 20 + 20,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						width: Math.random() * 15 + 5 + "px",
						height: Math.random() * 15 + 5 + "px",
						borderRadius: "50%",
						background: `radial-gradient(circle, rgba(0, 188, 212, ${
							Math.random() * 0.3 + 0.1
						}), rgba(124, 77, 255, ${Math.random() * 0.3 + 0.1}))`,
						filter: "blur(2px)",
					}}
				/>
			))}

			{/* Animated Glow Effect */}
			<Box
				component={motion.div}
				animate={{
					boxShadow: [
						"0 0 30px rgba(0, 188, 212, 0.1)",
						"0 0 50px rgba(124, 77, 255, 0.1)",
						"0 0 30px rgba(0, 188, 212, 0.1)",
					],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					width: "100%",
					height: "100%",
					transform: "translate(-50%, -50%)",
					pointerEvents: "none",
				}}
			/>
		</Box>
	);
};

const Projects = () => {
	const [ref, inView] = useInView({ triggerOnce: true });
	const [openDialog, setOpenDialog] = useState(false);
	const [adminMode, setAdminMode] = useState(false);
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [newProject, setNewProject] = useState({
		title: "",
		description: "",
		image: "",
		link: "",
	});
	const [projects, setProjects] = useState([
		{
			title: "NGO Website",
			description:
				"NGO Website built using Wordpress and using plugins like WPForms Lite",
			image: "./images/pr1.png",
			link: "https://ggsvidyakendra.com/",
		},
		{
			title: "NGO Website 2",
			description:
				"NGO Website built using React JS and integrating libraries like EmailJS and Razorpay payment gateway",
			image: "./images/pr2.png",
			link: "https://lifefoundationhelp.com/",
		}, 
		{
			title: "Nutritionist Website",
			description: "Nutritionist Website built using MERN stack",
			image: "./images/pr3.png",
			link: "https://arvindsabharwal.onrender.com/",
		},
		{
			title: "Education Website",
			description: "Education Website built using MERN stack",
			image: "./images/pr4.png",
			link: "https://codingarena.onrender.com/",
		},
		{
			title: "Trucking Website",
			description:
				"Trucking Website built using Wordpress and plugins like WPForms Lite",
			image: "./images/pr5.png",
			link: "https://gunaventerprises.com/",
		},
		{
			title: "Taxation Website",
			description: "Taxation Website built using MERN Stack",
			image: "./images/pr7.png",
			link: "https://frontend-taxharbor.thetaxharbor.com/",
		},
		{
			title: "Education Website",
			description:
				"Education Website built using MERN Stack with integration of Razorpay",
			image: "./images/pr8.png",
			link: "https://academicassignmentmaster.co.in/",
		},
	]);

	// Admin password - in a real app, this would be handled securely on the server
	const ADMIN_PASSWORD = "jaideep@2004"; // You can change this to your preferred password

	useEffect(() => {
		if (inView) {
			// Do something when the Projects component comes into view
		}
	}, [inView]);

	// Load projects from localStorage on component mount
	useEffect(() => {
		const savedProjects = localStorage.getItem("portfolioProjects");
		if (savedProjects) {
			setProjects(JSON.parse(savedProjects));
		}
	}, []);

	// Save projects to localStorage when they change
	useEffect(() => {
		localStorage.setItem("portfolioProjects", JSON.stringify(projects));
	}, [projects]);

	// Admin authentication
	const handleAdminAuth = () => {
		if (password === ADMIN_PASSWORD) {
			setAdminMode(true);
			setPasswordError(false);
			setOpenDialog(true);
		} else {
			setPasswordError(true);
		}
	};

	// Toggle password visibility
	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// Handle password input
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		if (passwordError) {
			setPasswordError(false);
		}
	};

	// Open admin dialog
	const handleOpenAdminDialog = () => {
		if (adminMode) {
			setOpenDialog(true);
		} else {
			// Show password dialog
			setOpenDialog(true);
		}
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
		if (!adminMode) {
			setPassword("");
			setPasswordError(false);
		} else {
			setNewProject({
				title: "",
				description: "",
				image: "",
				link: "",
			});
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewProject((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleAddProject = () => {
		if (
			newProject.title &&
			newProject.description &&
			newProject.image &&
			newProject.link
		) {
			setProjects((prev) => [...prev, newProject]);
			handleCloseDialog();
		}
	};

	return (
		<Box
			id='project'
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
					align='left'
					sx={{
						mb: 6,
						fontFamily: "'Poppins', sans-serif",
						fontWeight: 700,
						fontSize: { xs: "2.5rem", md: "2.8rem" },
						color: "white",
					}}>
					Projects
				</Typography>

				<Box sx={{ mb: 4 }}>
					<FuturisticCarousel slides={projects} />
				</Box>

				{/* Hidden Admin Button - Double-click to reveal */}
				<Box
					sx={{
						position: "fixed",
						bottom: 20,
						right: 20,
						zIndex: 10,
						opacity: 0.1,

						transition: "opacity 0.3s ease",
						"&:hover": {
							opacity: 0.9,
						},
					}}
					onDoubleClick={handleOpenAdminDialog}>
					<IconButton
						color='primary'
						sx={{
							backgroundColor: "rgba(0, 0, 0, 0.5)",
							"&:hover": {
								backgroundColor: "rgba(0, 0, 0, 0.7)",
							},
						}}>
						<AddIcon />
					</IconButton>
				</Box>
			</Container>

			{/* Admin Authentication or Add Project Dialog */}
			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				maxWidth='sm'
				fullWidth>
				{!adminMode ? (
					// Admin Authentication Dialog
					<>
						<DialogTitle
							sx={{
								background: "linear-gradient(90deg, #00bcd4, #7c4dff)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								fontWeight: 700,
								fontFamily: "'Poppins', sans-serif",
							}}>
							Admin Authentication
						</DialogTitle>
						<DialogContent>
							<Box
								sx={{
									mt: 2,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<LockIcon color='primary' sx={{ fontSize: 48, mb: 2 }} />
								<Typography
									variant='body1'
									sx={{
										mb: 3,
										textAlign: "center",
										fontFamily: "'Poppins', sans-serif",
									}}>
									Please enter the admin password to add new projects.
								</Typography>
								<TextField
									fullWidth
									label='Admin Password'
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={handlePasswordChange}
									error={passwordError}
									helperText={passwordError ? "Incorrect password" : ""}
									variant='outlined'
									sx={{ mb: 2 }}
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>
												<IconButton
													onClick={handleTogglePasswordVisibility}
													edge='end'>
													{showPassword ? (
														<VisibilityOffIcon />
													) : (
														<VisibilityIcon />
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
							</Box>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleCloseDialog} color='primary'>
								Cancel
							</Button>
							<Button
								onClick={handleAdminAuth}
								color='primary'
								variant='contained'
								disabled={!password}>
								Login
							</Button>
						</DialogActions>
					</>
				) : (
					// Add Project Dialog
					<>
						<DialogTitle
							sx={{
								background: "linear-gradient(90deg, #00bcd4, #7c4dff)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								fontWeight: 700,
								fontFamily: "'Poppins', sans-serif",
							}}>
							Add New Project
						</DialogTitle>
						<DialogContent>
							<Grid container spacing={2} sx={{ mt: 1 }}>
								<Grid item xs={12}>
									<TextField
										name='title'
										label='Project Title'
										fullWidth
										value={newProject.title}
										onChange={handleInputChange}
										variant='outlined'
										InputProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
										InputLabelProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										name='description'
										label='Project Description'
										fullWidth
										multiline
										rows={3}
										value={newProject.description}
										onChange={handleInputChange}
										variant='outlined'
										InputProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
										InputLabelProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										name='image'
										label='Image URL'
										fullWidth
										value={newProject.image}
										onChange={handleInputChange}
										variant='outlined'
										helperText='Enter a URL to an image (e.g., ./images/your-image.png)'
										InputProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
										InputLabelProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
										FormHelperTextProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										name='link'
										label='Project Link'
										fullWidth
										value={newProject.link}
										onChange={handleInputChange}
										variant='outlined'
										helperText='Enter the URL to your project'
										InputProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
										InputLabelProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
										FormHelperTextProps={{
											style: { fontFamily: "'Poppins', sans-serif" },
										}}
									/>
								</Grid>
							</Grid>
						</DialogContent>
						<DialogActions>
							<Button
								onClick={handleCloseDialog}
								color='primary'
								sx={{ fontFamily: "'Poppins', sans-serif" }}>
								Cancel
							</Button>
							<Button
								onClick={handleAddProject}
								color='primary'
								variant='contained'
								disabled={
									!newProject.title ||
									!newProject.description ||
									!newProject.image ||
									!newProject.link
								}
								sx={{ fontFamily: "'Poppins', sans-serif" }}>
								Add Project
							</Button>
						</DialogActions>
					</>
				)}
			</Dialog>
		</Box>
	);
};

export default Projects;
