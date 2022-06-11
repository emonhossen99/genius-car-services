import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import About from './Page/About/About';
import LogIn from './Page/Home/LogIn/LogIn';
import Header from './Page/Shered/Header/Header';
import Footer from './Page/Shered/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesDetail from './Page/Home/ServicesDetail/ServicesDetail';
import NotFound from './Page/Shered/NotFound/NotFound';
import Register from './Page/Home/LogIn/Register/Register';
import CheakOut from './Page/Home/CheakOut/CheakOut';
import RequireAuth from './Page/RequireAuth/RequireAuth';
import Addservices from './Page/Addservices/Addservices';
import ManageUser from './Page/ManageUser/ManageUser';

function App() {
  return (
    <div>
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/service/:serviceId' element={<ServicesDetail></ServicesDetail>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/cheakout' element={
         <RequireAuth>
           <CheakOut></CheakOut>
         </RequireAuth>
       }></Route>
       <Route path='/addservices' element={
         <RequireAuth>
           <Addservices></Addservices>
         </RequireAuth>
       }></Route>
       <Route path='managuser' element={
         <RequireAuth>
           <ManageUser></ManageUser>
         </RequireAuth>
       }></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
