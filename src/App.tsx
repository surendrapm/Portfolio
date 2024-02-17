
import './App.css'
import Profile from './components/Profile'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {


  return (
    <>
    <main>
       <Profile/>
       <div className='main-content'>
             <Nav/>
             <About/>
             <Skills/>
             <Work/>
       </div>
  </main>
    </>
  )
}

export default App
