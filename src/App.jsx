import './App.css'
import { HomePage } from './pages/home'
import MemoryMatch from './pages/Tasks/MemoryMatch'
import RockPaperScissors from './pages/Tasks/rockPaperScissorsArena'

function App() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-primary font-sans text-[#191919]">
      {/* <HomePage/> */}
      {/* <ProductDetails product={product} /> */}
      {/* <MemoryMatch/> */}
      <RockPaperScissors />
    </section>
  )
}

export default App