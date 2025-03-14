import { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "@fontsource/rajdhani/300.css";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LoadingScreen from "./components/loadingscreen/LoadingScreen";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1800);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{loading ? (
				<LoadingScreen />
			) : (
				<main className='firstcontain'>
					<img src='./images/bg11.jpg' alt='' className='bg' />
					<div className='secondcontain'>
						<Header />
						<Main />
					</div>
					<About />
					<Skills />
					<Projects />
					<Contact />
					<Footer />
				</main>
			)}
		</ThemeProvider>
	);
}

export default App;
