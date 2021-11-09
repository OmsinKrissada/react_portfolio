import './App.css';
import NavBar from './components/navbar';
import Home from './sections/home';
import Skill from './sections/skill';
import Project from './sections/project';
import About from './sections/about';
import Contact from './sections/contact';
import Test from './sections/testtt'


function App() {
  return ( <div className='App'>
    <NavBar/>
    <Home/>
    <About/>
    <Skill/>
    <Test/>
    <Project/>
    <Contact/>
    
  </div>);
}

export default App;
