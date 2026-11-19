import FashionHero from "../components/home/hero"
import { heroSlides } from "../data"
import { Header } from "../components/header"

export function HomePage() {
    
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* hero section */}
            <FashionHero slide={heroSlides[0]} />
        </>
    )
}