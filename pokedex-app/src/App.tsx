import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { Home } from './page/home'
import { Pokedex } from './page/pokedex'
import { Lendarios } from './page/lendarios'
import { Documentacao } from './page/documentacao'
import NotFound from './components/notfound'

function App() {

  return (
    <>
      <section className=" bg-gradient-to-b from-third to-yellow">
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/lendarios" element={<Lendarios/>} />
              <Route path="/documentacao" element={<Documentacao />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </section>

        
    </>
  )
}

export default App
