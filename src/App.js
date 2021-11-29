import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Skill from './pages/skill';
import Milestone from './pages/milestone';
import About from './pages/about';
import Footer from './components/footer'
import Project from './pages/project'
import Work from './pages/work'
import Test from './pages/test'
import Page404 from './pages/404'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return ( 
  <Router>
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />}/>
        <Route path='/about' caseSensitive={false} element={<About />}/>
        <Route path='/skills' caseSensitive={false} element={<Skill />}/>
        <Route path='/project/:projectName' caseSensitive={false} element={<Work />}/>
        <Route path='/project' caseSensitive={false} element={<Project />}/>
        <Route path='/milestone' caseSensitive={false} element={<Milestone />}/>
        <Route path='/404' caseSensitive={false} element={<Page404 />}/>
        <Route path='/test' caseSensitive={false} element={<Test />}/>
        <Route path='*' caseSensitive={false} element={<Navigate replace to='/404'/>}/>
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
