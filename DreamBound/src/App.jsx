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
            <Route exact path = '/' element={<Menu/>} />
            <Route path = '/choice' element={<Choices/>} />
            <Route path="*" element={<div className="bg-onyx w-screen h-screen flex justify-center items-center"><a className="bg-paynegrey border-2 border-black rounded-xl w-2/6 h-2/6 text-4xl flex justify-center items-center" href="/" target="blank">404 Error: Press To Return Home</a></div>}/>
          </Routes>
        </div>
      </Router>
    </AudioProvider>
  );
}

export default App;
