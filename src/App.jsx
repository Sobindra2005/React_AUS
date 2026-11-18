import FashionHero from "./components/home/hero"
import { heroSlides } from "./data"
import './App.css'

function App() {
  return (
    <main>
      <FashionHero slide={heroSlides[0]} />
    </main>
  )
}

export default App