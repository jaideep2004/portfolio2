import React, { useState, useEffect } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Container,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			// Determine active section
			const sections = ["hero", "about", "skills", "project", "contact"];
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const navItems = [
		{ name: "HOME", href: "#hero", id: "hero" },
		{ name: "ABOUT", href: "#about", id: "about" },
		{ name: "SKILLS", href: "#skills", id: "skills" },
		{ name: "PROJECTS", href: "#project", id: "project" },
		{ name: "CONTACT", href: "#contact", id: "contact" },
	];

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{
				textAlign: "center",
				height: "100%",
				backgroundColor: "rgba(18, 18, 18, 0.95)",
				backdropFilter: "blur(10px)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			<IconButton
				sx={{
					position: "absolute",
					top: 10,
					right: 10,
					color: "white",
				}}>
				<CloseIcon />
			</IconButton>
			<List>
				{navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton
							component='a'
							href={item.href}
							sx={{
								textAlign: "center",
								py: 2,
								color: activeSection === item.id ? "cyan" : "white",
								fontFamily: "'Poppins', sans-serif",
								position: "relative",

								"&::after": {
									content: '""',
									position: "absolute",
									bottom: 0,
									left: "50%",
									width: activeSection === item.id ? "80%" : "0%",
									height: "2px",
									background: "linear-gradient(90deg, #00bcd4, #7c4dff)",
									transition: "all 0.3s ease",
									transform: "translateX(-50%)",
								},
								"&:hover": {
									color: theme.palette.primary.main,
									"&::after": {
										width: "80%",
									},
								},
							}}>
							{item.name}
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	// Futuristic glowing effect for active menu item
	const GlowingBorder = ({ active, children }) => (
		<Box
			component={motion.div}
			animate={{
				boxShadow: active
					? [
							"0 0 5px rgba(0, 188, 212, 0.7)",
							"0 0 10px rgba(0, 188, 212, 0.5)",
							"0 0 5px rgba(0, 188, 212, 0.7)",
					  ]
					: "none",
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			sx={{
				position: "relative",
				borderRadius: "8px",
				overflow: "hidden",
				background: "rgba(18, 18, 18, 0.5)",
				backdropFilter: "blur(10px)",
			}}>
			{children}
			{active && (
				<Box
					sx={{
						position: "absolute",
						bottom: 0,
						left: 0,
						width: "100%",
						height: "2px",
						background: "linear-gradient(90deg, #00bcd4, #7c4dff)",
					}}
				/>
			)}
		</Box>
	);

	return (
		<AppBar
			position='fixed'
			elevation={0}
			component={motion.div}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			sx={{
				backgroundColor: scrolled ? "rgba(18, 18, 18, 0.8)" : "transparent",
				backdropFilter: scrolled ? "blur(10px)" : "none",
				boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
				borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
				transition: "all 0.3s ease-in-out",
				padding: "5px 0",
			}}>
			<Container maxWidth='lg'>
				<Toolbar
					sx={{
						justifyContent: "space-between",
						px: { xs: 1, sm: 2 },
						margin: "10px 0",
						py: 1,
					}}>
					<Box
						component={motion.div}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						sx={{
							fontFamily: "'Poppins', sans-serif",
							fontWeight: 700,
							fontSize: "2.5rem",
							background: "linear-gradient(90deg, #00ffff, #ffffff, #00ffff)",
							backgroundSize: "200% auto",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							letterSpacing: "0.02em",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							ml: { xs: 0, md: 0 },
							animation: "gradient 3s linear infinite",
							"@keyframes gradient": {
								"0%": {
									backgroundPosition: "0% 50%",
								},
								"100%": {
									backgroundPosition: "200% 50%",
								},
							},
						}}
						onClick={() => (window.location.href = "#hero")}>
						<Box
							component={motion.div}
							animate={{
								boxShadow: [
									"0 0 15px rgba(0, 255, 255, 0.7)",
									"0 0 25px rgba(0, 255, 255, 0.5)",
									"0 0 15px rgba(0, 255, 255, 0.7)",
								],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							sx={{
								width: "50px",
								height: "50px",
								borderRadius: "8px",
								background: "rgba(0, 255, 255, 0.1)",
								border: "2px solid rgba(0, 255, 255, 0.5)",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								mr: 1,
								fontSize: "1.8rem",
								color: "#00ffff",
								fontWeight: "bold",
							}}>
							J
						</Box>
						<Typography
							variant='h4'
							sx={{
								fontFamily: "'Poppins', sans-serif",
								fontWeight: 700,
								display: { xs: "none", sm: "block" },
								color: "white !important",
								textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
							}}>
							AIDEEP
						</Typography>
					</Box>

					{isMobile ? (
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='end'
							onClick={handleDrawerToggle}
							sx={{
								color: theme.palette.primary.main,
								border: `2px solid ${theme.palette.primary.main}`,
								borderRadius: "8px",
								p: 1,
							}}>
							<MenuIcon />
						</IconButton>
					) : (
						<Box
							component={motion.div}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							sx={{
								display: "flex",
								gap: 1,
								mr: { xs: 0, md: 0 },
							}}>
							{navItems.map((item, index) => (
								<GlowingBorder
									key={item.name}
									active={activeSection === item.id}>
									<Button
										component={motion.a}
										href={item.href}
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: 0.1 * index }}
										sx={{
											color:
												activeSection === item.id
													? theme.palette.primary.main
													: "white",
											fontWeight: 600,
											fontSize: "0.9rem",
											fontFamily: "'Poppins', sans-serif",
											mx: 1,
											position: "relative",

											borderRadius: "8px",
											// border: "1px solid rgba(255, 255, 255, 0.1)",
											px: 2,
											py: 1,
											"&::after": {
												content: '""',
												position: "absolute",
												bottom: 0,
												left: "50%",
												width: activeSection === item.id ? "80%" : "0%",
												height: "2px",
												background: "linear-gradient(90deg, #00bcd4, #7c4dff)",
												transition: "all 0.3s ease",
												transform: "translateX(-50%)",
											},
											"&:hover": {
												// backgroundColor: "rgba(18, 18, 18, 0.7)",
												color: theme.palette.primary.main,
												"&::after": {
													width: "80%",
												},
											},
										}}>
										{item.name}
									</Button>
								</GlowingBorder>
							))}
						</Box>
					)}
				</Toolbar>
			</Container>

			<AnimatePresence>
				{isMobile && (
					<Drawer
						anchor='right'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						PaperProps={{
							sx: {
								width: "100%",
								maxWidth: "300px",
								background: "rgba(18, 18, 18, 0.95)",
								backdropFilter: "blur(10px)",
							},
						}}>
						{drawer}
					</Drawer>
				)}
			</AnimatePresence>
		</AppBar>
	);
};

export default Header;
