import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
	Box,
	Typography,
	Container,
	Grid,
	TextField,
	Button,
	Paper,
	Snackbar,
	Alert,
	CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaLinkedin,
	FaGithub,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";

// Animated Contact Card Component
const ContactCard = ({ icon, title, content, delay }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			whileHover={{
				scale: 1.05,
				boxShadow: "0 10px 25px rgba(0, 188, 212, 0.3)",
			}}>
			<Paper
				elevation={4}
				sx={{
					p: 3,
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
					borderRadius: "16px",
					background:
						"linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.9) 100%)",
					border: "1px solid rgba(255, 255, 255, 0.05)",
					backdropFilter: "blur(10px)",
					transition: "all 0.3s ease",
				}}>
				<Box
					sx={{
						fontSize: "2.5rem",
						mb: 2,
						color: "#00bcd4",
						filter: "drop-shadow(0 0 8px rgba(0, 188, 212, 0.5))",
					}}>
					{icon}
				</Box>
				<Typography
					variant='h6'
					component='h2'
					sx={{ fontWeight: 600, mb: 1, fontSize: "1.5rem" }}>
					{title}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					sx={{ fontWeight: 500, fontSize: "1rem" }}>
					{content}
				</Typography>
			</Paper>
		</motion.div>
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
			{[...Array(15)].map((_, index) => (
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

const Contact = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const form = useRef();
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		subject: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "success",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error when user types
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.user_name.trim()) {
			newErrors.user_name = "Name is required";
		}
		if (!formData.user_email.trim()) {
			newErrors.user_email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
			newErrors.user_email = "Email is invalid";
		}
		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}
		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setLoading(true);

		emailjs
			.sendForm(
				"service_1z0da4o", // Replace with your EmailJS service ID
				"template_efe7977", // Replace with your EmailJS template ID
				form.current,
				"ByY67qallsZ4slKux" // Replace with your EmailJS public key
			)
			.then(
				(result) => {
					console.log(result.text);
					setSnackbar({
						open: true,
						message: "Message sent successfully!",
						severity: "success",
					});
					setFormData({
						user_name: "",
						user_email: "",
						subject: "",
						message: "",
					});
				},
				(error) => {
					console.log(error.text);
					setSnackbar({
						open: true,
						message: "Failed to send message. Please try again.",
						severity: "error",
					});
				}
			)
			.finally(() => {
				setLoading(false);
			});
	};

	const handleCloseSnackbar = () => {
		setSnackbar((prev) => ({
			...prev,
			open: false,
		}));
	};

	const contactInfo = [
		{
			icon: <FaEnvelope />,
			title: "Email",
			content: "jaisidhu2004@gmail.com",
			delay: 0,
		},
		{
			icon: <FaPhone />,
			title: "Phone",
			content: "+91 8360703621",
			delay: 0.1,
		},
	];

	const socialLinks = [
		{
			icon: <FaLinkedin />,
			url: "https://www.linkedin.com/in/jaideep-2oo4/",
			label: "LinkedIn",
		},
		{
			icon: <FaGithub />,
			url: "https://github.com/jaideep2004",
			label: "GitHub",
		},
		{
			icon: <FaInstagram />,
			url: "https://www.instagram.com/jaisidhu2oo4/",
			label: "Instagram",
		},
	];

	return (
		<Box
			id='contact'
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
						textAlign: { xs: "center", md: "center" },
						fontFamily: "'Poppins', sans-serif",
						fontWeight: 700,
						fontSize: { xs: "2.5rem", md: "2.8rem" },
						color: "white",
						position: "relative",
						zIndex: 1,
					}}>
					Contact Me
				</Typography>

				<Grid container spacing={4}>
					{/* Contact Info Cards */}
					<Grid item xs={12} md={4}>
						<Grid container spacing={3} direction='column'>
							{contactInfo.map((info, index) => (
								<Grid item key={index}>
									<ContactCard
										icon={info.icon}
										title={info.title}
										content={info.content}
										delay={info.delay}
									/>
								</Grid>
							))}
						</Grid>

						{/* Social Media Links */}
						<Box
							sx={{
								mt: 4,
								display: "flex",
								justifyContent: "center",
								gap: 2,
							}}>
							{socialLinks.map((social, index) => (
								<motion.a
									key={index}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									initial={{ opacity: 0, scale: 0 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									whileHover={{
										scale: 1.2,
										backgroundColor: "white",
										color: "black",
									}}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "60px",
										height: "60px",
										borderRadius: "50%",
										backgroundColor: "rgba(0, 188, 212, 0.3)",
										color: "#ffffff",
										textDecoration: "none",
										border: "1px solid rgba(0, 188, 212, 0.3)",
										fontSize: "1.5rem",
										backdropFilter: "blur(20px)",
									}}
									aria-label={social.label}>
									{social.icon}
								</motion.a>
							))}
						</Box>
					</Grid>

					{/* Contact Form */}
					<Grid item xs={12} md={8}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}>
							<Paper
								elevation={4}
								sx={{
									p: 4,
									borderRadius: "16px",
									background:
										"linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.9) 100%)",
									border: "1px solid rgba(255, 255, 255, 0.05)",
									backdropFilter: "blur(10px)",
								}}>
								<Typography
									variant='h5'
									component='h3'
									sx={{ mb: 3, fontWeight: 600 }}>
									Send Me a Message
								</Typography>

								<form ref={form} onSubmit={handleSubmit}>
									<Grid container spacing={3}>
										<Grid item xs={12} sm={6}>
											<TextField
												fullWidth
												label='Your Name'
												name='user_name'
												value={formData.user_name}
												onChange={handleChange}
												error={!!errors.user_name}
												helperText={errors.user_name}
												variant='outlined'
												required
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												fullWidth
												label='Your Email'
												name='user_email'
												type='email'
												value={formData.user_email}
												onChange={handleChange}
												error={!!errors.user_email}
												helperText={errors.user_email}
												variant='outlined'
												required
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												fullWidth
												label='Subject'
												name='subject'
												value={formData.subject}
												onChange={handleChange}
												error={!!errors.subject}
												helperText={errors.subject}
												variant='outlined'
												required
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												fullWidth
												label='Message'
												name='message'
												multiline
												rows={5}
												value={formData.message}
												onChange={handleChange}
												error={!!errors.message}
												helperText={errors.message}
												variant='outlined'
												required
											/>
										</Grid>
										<Grid item xs={12}>
											<Button
												type='submit'
												variant='contained'
												color='primary'
												size='large'
												disabled={loading}
												sx={{
													py: 1.5,
													px: 4,
													borderRadius: "8px",
													position: "relative",
												}}>
												{loading ? (
													<CircularProgress size={24} color='inherit' />
												) : (
													"Send Message"
												)}
											</Button>
										</Grid>
									</Grid>
								</form>
							</Paper>
						</motion.div>
					</Grid>
				</Grid>
			</Container>

			{/* Success/Error Notification */}
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbar.severity}
					sx={{ width: "100%" }}>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default Contact;
