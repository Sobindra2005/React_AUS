import FashionHero from "./components/home/hero"
import { heroSlides } from "./data"
import './App.css'
import { Header } from "./components/header"


function App() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-primary font-sans text-[#191919]">

      {/* Navbar */}
      <Header />

      {/* hero section */}
      <FashionHero slide={heroSlides[0]} />
    </section>
  )
}

export default App