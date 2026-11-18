import './App.css'
import { Home } from './pages/home'
import { ProductDetails } from './pages/productDetails'

function App() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-primary font-sans text-[#191919]">
       {/* <Home/> */}
       <ProductDetails/>
    </section>
  )
}

export default App