import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import About from './Page/About/About';
import LogIn from './Page/Home/LogIn/LogIn';
import Header from './Page/Shered/Header/Header';
import Footer from './Page/Shered/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
