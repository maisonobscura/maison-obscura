import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Results from "./components/Results"
import Cases from "./components/Cases"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Development from "./components/Development"
import Education from "./components/Education"
import Reveal from "./components/WorkCard"

function App() {
  return (
    <>
      <Header />
      <Hero />
    <Reveal>
      <About />
    </Reveal>
    <Reveal>
      <Results />
    </Reveal>
    <Reveal>
      <Cases />
    </Reveal>
    <Reveal>
      <Skills />
    </Reveal>
    <Reveal>
      <Works />
    </Reveal>
    <Reveal>
      <Development />
    </Reveal>
    <Reveal>
      <Education />
    </Reveal>
    <Reveal>
      <Contacts />
    </Reveal>
      <Footer />
    </>
  )
}

export default App
