import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import Choices from './components/choice_screen';
import Menu from './components/main_menu';


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
