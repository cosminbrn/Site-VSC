
import React from 'react'
import Footer from '../common/Footer/Footer'
import Navbar from '../common/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

const Home: React.FC = () => {
	return (
		<div className="Home">
			<Navbar />
			<Hero />
			<main>
                <About />
			    <Services />
			    <Contact />
            </main>
			<Footer />
		</div>
	)
}

export default Home
