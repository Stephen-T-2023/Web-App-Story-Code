import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Choices from './components/choice_screen';
import Menu from './components/main_menu';
import Music from "./components/music_play_pause";


function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path = '/' element={<Menu/>} />
          <Route path = '/choice' element={<Choices/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
