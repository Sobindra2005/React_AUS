import FashionHero from "../components/home/hero"
import { heroSlides } from "../data"
import { Header } from "../components/header"
import { useState } from "react"

export function HomePage() {
    const [currentSlides, setCurrentIndex] = useState(1)
    return (
        <>
            {/* Navbar */}
            <Header />

            {/* hero section */}
            <FashionHero slide={heroSlides[currentSlides]} currentIndex={currentSlides + 1} maxIndex={heroSlides.length} />
        </>
    )
}