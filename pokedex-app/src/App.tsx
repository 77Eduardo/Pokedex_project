import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { Home } from './page/home'

function App() {

  return (
    <>
      <Navbar/>
      <section className=" bg-gradient-to-b from-third to-yellow">
        <Home />
        <Footer />
      </section>
        
    </>
  )
}

export default App
