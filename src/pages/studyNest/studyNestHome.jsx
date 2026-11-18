import "./studynest.css"
import Features from '../components/features'
import Footer from '../components/footer'
import Header from '../../components/header'
import Hero from '../components/hero'

export default function StudyNest() {
    return (
        <div className="max-w-300 m-auto pl-6 pr-10 py-5">
            {/* Component hint: This navbar can become a Navbar component later. */}
            <Header />

            <main className="main-content">
                {/* Component hint: This hero section can become a Hero component later. */}
                <Hero />

                {/* Component hint: This feature section can become a Features component later. */}
                <Features />
            </main>

            {/* Component hint: This footer can become a Footer component later. */}
            <Footer />
        </div>
    )
}