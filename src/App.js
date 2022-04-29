
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Login from './components/Login/Login/Login'
import Register from './components/Register/Register'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Header/>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='blogs'element={<Blogs></Blogs>} ></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>

        </Routes>
      
       <Footer/>
    </div>
  );
}

export default App;
