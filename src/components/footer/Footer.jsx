import React from "react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Link,
	IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import {
	FaLinkedin,
	FaGithub,
	FaTwitter,
	FaInstagram,
	FaHeart,
} from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			icon: <FaLinkedin />,
			url: "https://linkedin.com/in/yourusername",
			label: "LinkedIn",
		},
		{
			icon: <FaGithub />,
			url: "https://github.com/yourusername",
			label: "GitHub",
		},
		{
			icon: <FaTwitter />,
			url: "https://twitter.com/yourusername",
			label: "Twitter",
		},
		{
			icon: <FaInstagram />,
			url: "https://instagram.com/yourusername",
			label: "Instagram",
		},
	];

	const footerLinks = [
		{ name: "Home", url: "#home" },
		{ name: "About", url: "#about" },
		{ name: "Skills", url: "#skills" },
		{ name: "Projects", url: "#project" },
		{ name: "Contact", url: "#contact" },
	];

	return (
		<Box
			component='footer'
			sx={{
				py: 6,
				background:
					"linear-gradient(180deg, rgba(18,18,18,0.9) 0%, rgba(0,0,0,1) 100%)",
				position: "relative",
				overflow: "hidden",
			}}>
			{/* Animated Background */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage:
						"radial-gradient(circle, rgba(0, 188, 212, 0.05) 1px, transparent 1px)",
					backgroundSize: "30px 30px",
					opacity: 0.5,
					zIndex: 0,
				}}
			/>

			<Container maxWidth='lg' sx={{ position: "relative", zIndex: 1 }}>
				<Grid container spacing={4}>
					{/* Logo and Description */}
					{/* <Grid item xs={12} md={4}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							<Typography
								variant='h4'
								component='div'
								sx={{
									mb: 2,
									fontWeight: 700,
									background: "linear-gradient(90deg, #00bcd4, #7c4dff)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}>
								John Doe
							</Typography>
							<Typography variant='body2' sx={{ mb: 3, maxWidth: "300px" }}>
								A passionate web developer focused on creating interactive,
								responsive, and user-friendly websites and applications.
							</Typography>

							<Box sx={{ display: "flex", gap: 1 }}>
								{socialLinks.map((social, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3, delay: index * 0.1 }}>
										<IconButton
											component='a'
											href={social.url}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={social.label}
											sx={{
												color: "#00bcd4",
												backgroundColor: "rgba(0, 188, 212, 0.1)",
												"&:hover": {
													backgroundColor: "rgba(0, 188, 212, 0.2)",
													transform: "translateY(-3px)",
												},
												transition: "all 0.3s ease",
											}}>
											{social.icon}
										</IconButton>
									</motion.div>
								))}
							</Box>
						</motion.div>
					</Grid> */}

					{/* Quick Links */}
					{/* <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{ mb: 3, fontWeight: 600 }}
              >
                Quick Links
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {footerLinks.map((link, index) => (
                  <Box component="li" key={index}>
                    <Link
                      href={link.url}
                      underline="none"
                      sx={{
                        color: "text.secondary",
                        display: "inline-flex",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#00bcd4",
                          transform: "translateX(5px)",
                        },
                        "&::before": {
                          content: '""',
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#00bcd4",
                          mr: 1.5,
                          transition: "all 0.3s ease",
                        },
                        "&:hover::before": {
                          transform: "scale(1.5)",
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid> */}

					{/* Contact Info */}
					{/* <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{ mb: 3, fontWeight: 600 }}
              >
                Contact Info
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box component="li">
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <strong>Email:</strong> john.doe@example.com
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <strong>Phone:</strong> +1 (123) 456-7890
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <strong>Location:</strong> New York, NY, USA
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid> */}
				</Grid>

				{/* Divider */}
				<Box
					sx={{
						height: "1px",
						width: "100%",
						background:
							"linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.3), transparent)",
						my: 4,
					}}
				/>

				{/* Copyright */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexWrap: "wrap",
						gap: 0.5,
					}}>
					<Typography
						variant='body2'
						align='center'
						sx={{ color: "text.secondary" }}>
						© {currentYear} Jaideep Singh. 
					</Typography>
					{/* <FaHeart style={{ color: "#ff4081", fontSize: "0.875rem" }} /> */}
					{/* <Typography
						variant='body2'
						align='center'
						sx={{ color: "text.secondary" }}>
						using React.
					</Typography> */}
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
