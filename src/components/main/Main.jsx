import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Button,
	IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Futuristic Code Animation Component
const FuturisticCodeAnimation = () => {
	return (
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
						"linear-gradient(rgba(0, 188, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.1) 1px, transparent 1px)",
					backgroundSize: "20px 20px",
					opacity: 0.3,
				}}
			/>

			{/* Animated Code Lines */}
			{Array.from({ length: 10 }).map((_, index) => (
				<motion.div
					key={index}
					initial={{ x: -100, opacity: 0 }}
					animate={{
						x: 0,
						opacity: [0, 1, 1, 0],
						transition: {
							duration: 3,
							delay: index * 0.2,
							repeat: Infinity,
							repeatDelay: 5,
						},
					}}
					style={{
						position: "absolute",
						left: "10%",
						top: `${10 + index * 8}%`,
						width: `${Math.random() * 30 + 40}%`,
						height: "2px",
						background:
							index % 3 === 0
								? "#00bcd4"
								: index % 2 === 0
								? "#7c4dff"
								: "#ffffff",
						borderRadius: "4px",
					}}
				/>
			))}

			{/* Animated Particles */}
			{Array.from({ length: 20 }).map((_, index) => (
				<motion.div
					key={`particle-${index}`}
					initial={{
						x: Math.random() * 100,
						y: Math.random() * 100,
						opacity: 0,
					}}
					animate={{
						x: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
						y: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
						opacity: [0, 1, 0],
						transition: {
							duration: Math.random() * 5 + 5,
							repeat: Infinity,
							repeatType: "loop",
						},
					}}
					style={{
						position: "absolute",
						width: Math.random() * 4 + 2,
						height: Math.random() * 4 + 2,
						borderRadius: "50%",
						background: "#00bcd4",
						filter: "blur(1px)",
					}}
				/>
			))}

			{/* Central Code Element */}
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{
					scale: [0.8, 1, 0.8],
					opacity: 1,
					transition: {
						duration: 3,
						repeat: Infinity,
						repeatType: "reverse",
					},
				}}
				style={{
					padding: "20px 40px",
					background: "rgba(0, 0, 0, 0.7)",
					borderRadius: "8px",
					border: "1px solid rgba(0, 188, 212, 0.5)",
					boxShadow: "0 0 20px rgba(0, 188, 212, 0.3)",
					zIndex: 10,
				}}>
				<Typography
					variant='h3'
					sx={{
						fontFamily: "monospace",
						color: "#00bcd4",
						textShadow: "0 0 10px rgba(0, 188, 212, 0.5)",
					}}>
					{"<CODE/>"}
				</Typography>
			</motion.div>
		</Box>
	);
};

const Main = () => {
	//delay type animation
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 500);
	}, []);

	return (
		<Box
			id='hero'
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				position: "relative",
				overflow: "hidden",
				py: { xs: 17, md: 19 },
				px: { xs: 2, md: 0 },
			}}>
			<Container maxWidth='lg'>
				<Grid container spacing={4} alignItems='center'>
					<Grid item xs={12} md={6}>
						<Box
							component={motion.div}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							sx={{
								mb: 4,
								position: "relative",
								zIndex: 1,
								px: { xs: 2, md: 0 },
							}}>
							{/* Blurred background for text */}
							<Box
								sx={{
									position: "absolute",
									top: -20,
									left: -20,
									right: -20,
									bottom: -20,
									background: "rgba(18, 18, 18, 0.2)",
									backdropFilter: "blur(10px)",
									borderRadius: "16px",
									border: "1px solid rgba(255, 255, 255, 0.1)",
									boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
									zIndex: -1,
								}}
							/>

							{loading && (
								<Box sx={{ position: "relative", p: { xs: 2, md: 4 } }}>
									<Typography
										variant='h1'
										sx={{
											mb: 2,
											background:
												"linear-gradient(90deg, #00ffff, #ffffff, #00ffff)",
											backgroundSize: "200% auto",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											fontFamily: "'Poppins', sans-serif",
											fontWeight: 700,
											fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
											lineHeight: 1.2,
											animation: "gradient 3s linear infinite",
											"@keyframes gradient": {
												"0%": {
													backgroundPosition: "0% 50%",
												},
												"100%": {
													backgroundPosition: "200% 50%",
												},
											},
										}}>
										<TypeAnimation
											cursor={false}
											sequence={["Hi, I am Jaideep Singh"]}
											speed={5}
										/>
									</Typography>
									<Typography
										variant='h6'
										component={motion.div}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1, duration: 0.8 }}
										sx={{
											mb: 4,
											color: "white",
											fontWeight: 500,
											fontFamily: "'Poppins', sans-serif",
											fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" },
										}}>
										Student / Web Developer
									</Typography>
									<Box
										component={motion.div}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.5, duration: 0.8 }}
										sx={{
											display: "flex",
											flexDirection: { xs: "column", sm: "row" },
											gap: { xs: 2, sm: 0 },
										}}>
										<Button
											variant='contained'
											color='primary'
											size='large'
											href='#about'
											sx={{
												mr: { xs: 0, sm: 2 },
												px: 4,
												py: 1.5,
												borderRadius: "8px",
												fontSize: "1rem",
												fontWeight: 600,
												boxShadow: "0 10px 20px rgba(0, 188, 212, 0.3)",
												fontFamily: "'Poppins', sans-serif",
												width: { xs: "100%", sm: "auto" },
											}}>
											Explore My Work
										</Button>
										<Button
											variant='outlined'
											color='primary'
											size='large'
											href='#contact'
											sx={{
												px: 4,
												py: 1.5,
												borderRadius: "8px",
												fontSize: "1rem",
												fontWeight: 600,
												borderWidth: "2px",
												backgroundColor: "rgba(255, 255, 255, 0.05)",
												fontFamily: "'Poppins', sans-serif",
												width: { xs: "100%", sm: "auto" },
											}}>
											Contact Me
										</Button>
									</Box>
								</Box>
							)}
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								height: { xs: "250px", sm: "300px", md: "470px" },
								width: "100%",
								px: { xs: 2, md: 0 },
							}}
							component={motion.div}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}>
							<FuturisticCodeAnimation />
						</Box>
					</Grid>
				</Grid>
			</Container>

			{/* Scroll Down Indicator */}
			<Box
				component={motion.div}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2, duration: 0.8 }}
				sx={{
					position: "absolute",
					bottom: { xs: "20px", md: "30px" },
					left: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					justifyContent: "center",
					
				}}>
				<Typography
					variant='body2'
					sx={{
						mb: 1,
						color: "text.secondary",
						fontFamily: "'Poppins', sans-serif",
						fontSize: { xs: "0.8rem", md: "0.875rem" },
					}}>
					Scroll Down
				</Typography>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: "loop",
					}}>
					<Button
						href='#about'
						color='primary'
						sx={{
							borderRadius: "50%",
							minWidth: "auto",
							p: 1,
							backgroundColor: "rgba(0, 188, 212, 0.1)",
							"&:hover": {
								backgroundColor: "rgba(0, 188, 212, 0.2)",
							},
						}}>
						<KeyboardArrowDownIcon fontSize='large' />
					</Button>
				</motion.div>
			</Box>
		</Box>
	);
};

export default Main;
