import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Addbook from './pages/Addbook';
import Books from './pages/Books';
import Footer from './pages/Footer';
import Updatebook from './pages/Updatebook';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ='/' element={<Home/>}></Route>
        <Route  path ='/book' element={<Books/>}></Route>
        <Route  path ='/addBooks' element={<Addbook/>}></Route>
        <Route path='/update' element={<Updatebook/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
