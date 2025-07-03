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

// Simple Background Component for Slider
const SliderBackground = () => {
	return (
		<Box
			sx={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				borderRadius: "20px",
				overflow: "hidden",
				zIndex: -1,
				opacity: 0.8,
			}}>
			{/* Gradient Background */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)",
				}}
			/>
			
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
					backgroundSize: "30px 30px",
					opacity: 0.3,
				}}
			/>
			
			{/* Glow Effect */}
			<Box
				component={motion.div}
				animate={{
					opacity: [0.4, 0.6, 0.4],
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
					height: "60%",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(0, 188, 212, 0.15) 0%, transparent 70%)",
					transform: "translate(-50%, -50%)",
					filter: "blur(40px)",
				}}
			/>
		</Box>
	);
};

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

	// Calculate indices for visible cards (center, left, right)
	const getVisibleIndices = () => {
		const centerIndex = active;
		const leftIndex = (active - 1 + totalSlides) % totalSlides;
		const rightIndex = (active + 1) % totalSlides;
		return { centerIndex, leftIndex, rightIndex };
	};

	const { centerIndex, leftIndex, rightIndex } = getVisibleIndices();

	// Function to determine card position
	const getCardPosition = (index) => {
		if (index === centerIndex) return "center";
		if (index === leftIndex) return "left";
		if (index === rightIndex) return "right";
		return "hidden";
	};

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: { xs: "500px", md: "520px" },
				marginBottom: "80px",
				perspective: "1500px",
				borderRadius: "20px",
			}}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}>
			
			{/* Background */}
			<SliderBackground />
			
			{/* Main Display */}
			<Box
				sx={{
					width: "100%",
					height: "100%",
					position: "relative",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					transformStyle: "preserve-3d",
				}}>
				{/* Carousel Items */}
				<Box
					sx={{ 
						width: "100%", 
						height: "100%", 
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					{slides.map((slide, index) => {
						const position = getCardPosition(index);
						
						// Define transformations based on position
						let transform = "scale(0)";
						let zIndex = 0;
						let opacity = 0;
						
						switch (position) {
							case "center":
								transform = "translateX(0) translateZ(0) rotateY(0)";
								zIndex = 3;
								opacity = 1;
								break;
							case "left":
								transform = "translateX(-75%) translateZ(-150px) rotateY(25deg)";
								zIndex = 2;
								opacity = 0.7;
								break;
							case "right":
								transform = "translateX(75%) translateZ(-150px) rotateY(-25deg)";
								zIndex = 2;
								opacity = 0.7;
								break;
							default:
								transform = "scale(0)";
								zIndex = 0;
								opacity = 0;
						}
						
						return (
							<Box
								key={index}
								component={motion.div}
								initial={{ opacity: 0 }}
								animate={{ 
									opacity,
									transform,
									filter: position !== "center" ? "brightness(0.7)" : "brightness(1)"
								}}
								transition={{ 
									duration: 0.6,
									ease: "easeOut"
								}}
								onClick={() => position !== "center" && setActive(index)}
								sx={{
									position: "absolute",
									width: { xs: "90%", sm: "80%", md: "40%" },
									height: { xs: "80%", md: "85%" },
									cursor: position !== "center" ? "pointer" : "default",
									zIndex,
									transformOrigin: "center center",
									transformStyle: "preserve-3d",
									transition: "all 0.5s ease",
								}}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										background: "rgba(30,30,30,0.8)",
										border: "1px solid rgba(255, 255, 255, 0.1)",
										borderRadius: "16px",
										overflow: "hidden",
										transition: "all 0.3s ease",
										position: "relative",
										boxShadow: position === "center" 
											? "0 15px 35px rgba(0, 188, 212, 0.4)" 
											: "0 10px 25px rgba(0, 0, 0, 0.5)",
										"&:hover": position === "center" && {
											boxShadow: "0 20px 40px rgba(0, 188, 212, 0.5)",
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
									}}>
									<CardMedia
										component='img'
										height={{ xs: "180", md: "200" }}
										image={slide.image}
										alt={slide.title}
										sx={{
											transition: "transform 0.3s ease",
											objectFit: "cover",
											filter: position !== "center" ? "brightness(0.8)" : "brightness(1)",
										}}
									/>
									<CardContent
										sx={{
											flexGrow: 1,
											display: "flex",
											flexDirection: "column",
											p: { xs: 2, md: 2.5 },
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
										}}>
										<Typography
											variant='h5'
											component='h3'
											sx={{
												fontFamily: "'Poppins', sans-serif",
												fontWeight: 600,
												fontSize: { xs: "1.2rem", md: "1.5rem" },
												color: position === "center" ? "#00bcd4" : "white",
												mb: 1,
												textShadow: "0 2px 4px rgba(0,0,0,0.3)",
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
												{slide.technologies.map((tech, idx) => (
													<Chip
														key={idx}
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
									{position === "center" && (
										<CardActions
											sx={{
												p: { xs: 1.5, md: 2 },
												background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
												display: "flex",
												justifyContent: "center",
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
												}}>
												View Project
											</Button>
										</CardActions>
									)}
								</Card>
							</Box>
						);
					})}
				</Box>
			</Box>

			{/* Navigation Controls */}
			<Box
				sx={{
					position: "absolute",
					bottom: -60,
					left: 0,
					right: 0,
					display: "flex",
					justifyContent: "center",
					gap: 5,
				}}>
				<IconButton
					onClick={prevSlide}
					sx={{
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						color: "#00bcd4",
						width: "45px",
						height: "45px",
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.8)",
							transform: "scale(1.1)",
							boxShadow: "0 0 15px rgba(0, 188, 212, 0.5)",
						},
						transition: "all 0.3s ease",
					}}>
					<ArrowBackIosNewIcon />
				</IconButton>
				<IconButton
					onClick={nextSlide}
					sx={{
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						color: "#00bcd4",
						width: "45px",
						height: "45px",
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.8)",
							transform: "scale(1.1)",
							boxShadow: "0 0 15px rgba(0, 188, 212, 0.5)",
						},
						transition: "all 0.3s ease",
					}}>
					<ArrowForwardIosIcon />
				</IconButton>
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
			title: "The FinShelter",
			description: "Tax filing platform built with MERN stack and backend record management.",
			image: "./images/pr1.png",
			link: "https://thefinshelter.com/",
			
		},
		{
			title: "TrueSub",
			description: "E-commerce website with custom WordPress coding and multilingual support.",
			image: "./images/pr2.png", 
			link: "https://karhari.sprintbus.ca/",
			
		},
		{
			title: "SingleAudio",
			description: "Fully custom WordPress music site with artist uploads and copyright tools.",
			image: "./images/pr3.png",
			link: "https://singleaudio.com/",
			
		},
		{
			title: "Karhari Media",
			description: "Custom WordPress music platform with dynamic releases and audio player.",
			image: "./images/pr4.png",
			link: "https://karharimedia.com/",
			
		},
		{
			title: "Inlighntech",
			description: "Course and certification site with WooCommerce and training enrollment.",
			image: "./images/pr5.png",
			link: "https://www.inlighntech.com/",
			
		},
		{
			title: "Acumen",
			description: "Analytics company website with custom WordPress plugin and forms.",
			image: "./images/pr6.png",
			link: "https://acumendata.io/",
			
		},
		{
			title: "Life Foundation NGO",
			description: "Donation platform using React with Razorpay and PayPal integration.",
			image: "./images/pr7.png",
			link: "https://lifefoundationhelp.com/",
			
		},
		{
			title: "AcademicAssignmentMaster",
			description: "MERN-based education site with dashboards and Razorpay payments.",
			image: "./images/pr8.png",
			link: "https://academicassignmentmaster.co.in/",
			
		},
		{
			title: "NGO Website",
			description: "NGO Website built using WordPress and using plugins like WPForms Lite.",
			image: "./images/pr1.png",
			link: "https://ggsvidyakendra.com/",
			
		},
		{
			title: "Nutritionist Website",
			description: "Nutritionist Website built using MERN stack with appointment booking.",
			image: "./images/pr3.png",
			link: "https://arvindsabharwal.onrender.com/",
			
		},
		{
			title: "Education Website",
			description: "Education Website built using MERN stack with course management.",
			image: "./images/pr4.png",
			link: "https://codingarena.onrender.com/",
			
		},
		{
			title: "Trucking Website",
			description: "Trucking Website built using WordPress and plugins like WPForms Lite.",
			image: "./images/pr5.png",
			link: "https://gunaventerprises.com/",
			
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
