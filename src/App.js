import './App.css';
import NavBar from './components/navbar';
import Home from './sections/home';
import Skill from './sections/skill';
import Milestone from './sections/milestone';
import About from './sections/about';
import Contact from './sections/contact';
import Project from './sections/project'


function App() {
  return ( <div className='App'>
    <NavBar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Milestone/>
    <Contact/>
    
  </div>);
}

export default App;
