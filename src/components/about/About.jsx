import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
	return (
		<Box
			id='about'
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				py: 8,
				px: { xs: 2, md: 0 },
			}}>
			<Container maxWidth='lg'>
				<Grid container spacing={4} alignItems='center'>
					<Grid item xs={12} md={6}>
						<Box
							component={motion.div}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							sx={{
								position: "relative",
								width: { xs: "80%", md: "100%" },
								margin: { xs: "0 auto", md: 0 },
								aspectRatio: "1",
								maxWidth: { xs: "300px", md: "400px" },
							}}>
							<Typography
								variant='h2'
								sx={{
									mb: 14,
									textAlign: { xs: "center", md: "center" },
									fontFamily: "'Poppins', sans-serif",
									fontWeight: 700,
									fontSize: { xs: "2.5rem", md: "2.8rem" },
									color: "white",
									position: "absolute",
									top: { xs: -60, md: -100 },
									left: 0,
									right: 0,
									zIndex: 1,
								}}>
								About Me
							</Typography>
							{/* Profile Image Container */}
							<Box
								sx={{
									position: "relative",
									width: "100%",
									height: "100%",
									borderRadius: "20px",
									overflow: "hidden",
									boxShadow: "0 8px 32px 0 rgba(0, 188, 212, 0.3)",
									border: "2px solid rgba(0, 188, 212, 0.5)",
								}}>
								<img
									src='./images/profile2.jpg'
									alt='Profile'
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</Box>

							{/* Decorative Elements */}
							<Box
								sx={{
									position: "absolute",
									top: -20,
									left: -20,
									width: 40,
									height: 40,
									borderRadius: "50%",
									background: "linear-gradient(45deg, #00bcd4, #7c4dff)",
									opacity: 0.5,
									zIndex: -1,
								}}
							/>
							<Box
								sx={{
									position: "absolute",
									bottom: -20,
									right: -20,
									width: 40,
									height: 40,
									borderRadius: "50%",
									background: "linear-gradient(45deg, #7c4dff, #00bcd4)",
									opacity: 0.5,
									zIndex: -1,
								}}
							/>
						</Box>
					</Grid>

					<Grid item xs={12} md={6}>
						<Box
							component={motion.div}
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							sx={{
								textAlign: { xs: "center", md: "left" },
								position: "relative",
								zIndex: 1,
								background: "rgba(18, 18, 18, 0.5)",
								backdropFilter: "blur(10px)",
								borderRadius: "20px",
								padding: { xs: 3, md: 4 },
								border: "1px solid rgba(255, 255, 255, 0.1)",
								boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
							}}>
							<Typography
								variant='h4'
								sx={{
									mb: 3,
									fontFamily: "'Poppins', sans-serif",
									fontWeight: 600,
									fontSize: { xs: "1.8rem", md: "2.2rem" },
								}}>
								Jaideep Singh
							</Typography>
							<Typography
								variant='h6'
								sx={{
									mb: 4,
									color: "text.secondary",
									fontFamily: "'Poppins', sans-serif",
									fontSize: { xs: "1.1rem", md: "1.2rem" },
								}}>
								Final Year Student in B.Voc. Software Development
							</Typography>
							<Typography
								variant='body1'
								sx={{
									mb: 4,
									fontFamily: "'Poppins', sans-serif",
									fontSize: { xs: "1rem", md: "1.1rem" },
									lineHeight: 1.8,
								}}>
								I am a passionate web developer with a strong foundation in
								front-end technologies and a keen interest in creating
								innovative digital experiences. My journey in software
								development has equipped me with hands-on experience in modern
								web technologies and a deep understanding of user-centric design
								principles.
							</Typography>
							<Typography
								variant='body1'
								sx={{
									mb: 4,
									fontFamily: "'Poppins', sans-serif",
									fontSize: { xs: "1rem", md: "1.1rem" },
									lineHeight: 1.8,
								}}>
								Currently pursuing my final year in B.Voc. Software Development,
								I combine academic knowledge with practical skills to build
								responsive and intuitive web applications. My expertise includes
								React.js, JavaScript, and various modern development tools.
							</Typography>
							<Box
								sx={{
									display: "flex",
									gap: 2,
									justifyContent: { xs: "center", md: "flex-start" },
								}}>
								<Button
									variant='contained'
									color='primary'
									size='large'
									startIcon={<FaDownload />}
									href='https://drive.google.com/file/d/11-bERt3BYS6r3aAfdq0ZrLN4DW_SM9Hf/view?usp=sharing'
									target='_blank'
									sx={{
										borderRadius: "8px",
										fontFamily: "'Poppins', sans-serif",
										fontWeight: 600,
										px: 4,
										py: 1.5,
									}}>
									Download Resume
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default About;
