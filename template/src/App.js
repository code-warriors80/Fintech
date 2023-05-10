import './App.css';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Routes/Home';

function App() {
  return (
      <BrowserRouter>
         <Nav />
         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
      </BrowserRouter>
       
      
  )
}

export default App;
