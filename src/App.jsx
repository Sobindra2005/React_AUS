import './App.css'
import { Cart } from './pages/cart'
import { HomePage } from './pages/home'
import MemoryMatch from './pages/Tasks/MemoryMatch'
import MultiStepForm from './pages/Tasks/multiForm'
import OTPVerification from './pages/Tasks/otpVerification'
import RockPaperScissors from './pages/Tasks/rockPaperScissorsArena'

function App() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-primary font-sans text-[#191919]">
      {/* <HomePage/> */}
      {/* <ProductDetails product={product} /> */}
      {/* <MemoryMatch/> */}
      <Cart />
    </section>
  )
}

export default App