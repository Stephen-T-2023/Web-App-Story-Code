import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Choices from './components/choice_screen';
import Menu from './components/main_menu';
import { AudioProvider } from "./components/AudioContext";


function App() {

  return (
    <AudioProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path = '/' element={<Menu/>} />
            <Route path = '/choice' element={<Choices/>} />
          </Routes>
        </div>
      </Router>
    </AudioProvider>
  );
}

export default App;
