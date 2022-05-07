
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Login from './components/Login/Login/Login'
import Register from './components/Register/Register'
import NotFound from './components/Shared/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom';
import ManageItems from './components/Manage Items/ManageItems';
import AddItem from './components/AddItem/AddItem';
import MyItems from './components/MyItems/MyItems';
import InventoryItemDetail from './components/Home/InventoryItems/InventoryItemDetail/InventroyItemDetail';
import RequireAuth from './components/Login/RequireAuth/RequireAuth'
import UpdateInventoryItem from './components/UpdateInventoryItem/UpdateInventoryItem';
import BlogDetails from './components/Blogs/BlogDetails/BlogDetails';

function App() {
  return (
    <div className="App">
       <Header/>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='blogs'element={<Blogs></Blogs>} ></Route>
          <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='manageitem' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>} ></Route>

          <Route path='/manageitem/:inventoryItemId' element={<RequireAuth>

            <InventoryItemDetail></InventoryItemDetail>
          </RequireAuth>} >

          </Route>
          
          <Route path='additem' element={<AddItem></AddItem>} ></Route>
          <Route path='myitem' element={<MyItems></MyItems>} ></Route>
          <Route path='updateinventoryitem' element={<UpdateInventoryItem></UpdateInventoryItem>} ></Route>
 
          <Route path='*' element={<NotFound></NotFound>}> </Route>
        </Routes>
      
       <Footer/>
       <ToastContainer />
    </div>
  );
}

export default App;
