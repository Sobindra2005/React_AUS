import './App.css'
import { HomePage } from './pages/home'

function App() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-primary font-sans text-[#191919]">
      <HomePage/>
      {/* <ProductDetails product={product} /> */}
    </section>
  )
}

export default App