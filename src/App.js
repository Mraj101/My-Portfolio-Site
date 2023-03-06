import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import SkillProgressBar from './components/SkillProgressBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <SkillProgressBar/>
    </div>
  );
}

export default App;
