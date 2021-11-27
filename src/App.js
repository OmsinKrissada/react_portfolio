import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Skill from './pages/skill';
import Milestone from './pages/milestone';
import About from './pages/about';
import Footer from './components/footer';
import Project from './pages/project'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return ( 
  <Router>
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />}/>
        <Route path='about' caseSensitive={false} element={<About />}/>
        <Route path='skills' caseSensitive={false} element={<Skill />}/>
        <Route path='project' caseSensitive={false} element={<Project />}/>
        <Route path='milestone' caseSensitive={false} element={<Milestone />}/>
      </Routes>
      <Footer/>
  </div>
  </Router>
  );
}

export default App;

// function App() {
//   return ( <div className='App'>
//     <NavBar/>
//     <Home/>
//     <About/>
//     <Skill/>
//     <Project/>
//     <Milestone/>
//     <Contact/>
    
//   </div>);
// }

// export default App;
