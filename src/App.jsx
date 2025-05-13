import './App.css'
import Header from './components/header'
import Competencies from './components/Competencies'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div>
        <Header />
        <Competencies />
        <Projects />

        <div className="footer">
          <div className="footer_msg">
            Let’s chat! I’m ready to work on exciting projects.        
          </div>
          <div className="footer_links">
            <a href="mailto:mphangokatlego08@gmail.com">mphangokatlego08@gmail.com</a> |
            <a href="tel:+27685882974">068 588 2974</a> |
            <a href="https://github.com/katlegomaphango">Github</a> |
            <a href="https://www.linkedin.com/in/kat-maphango/">linkedIn</a> |
            <a href="https://kativan.netlify.app/">Personal Website</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
