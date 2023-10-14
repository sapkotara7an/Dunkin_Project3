import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';


import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Locations from './Locations';
import Delivery from './Delivery';
import Menu from './Menu';
import Dunkinrewards from './Dunkinrewards';
import HomePageLayout from './HomePage.Layout';
import LoginPage from './Login';
import SignUp from './SignUp';
import CoffeeDisplay from './Coffee';
import RewardCard from './RewardCard';
import ShopItem from './Shop';
import Product from './ShopDetail';


function App() {
 
  
  return (
    
    
    <div className="App">
      <Routes>

        <Route path="/" element={ <HomePageLayout/> } >
          <Route index element = {<Home/>}/>
        <Route path="locations" element={ <Locations/> } />
        <Route path="delivery" element={ <Delivery/> } />
        <Route path="menu" element={ <Menu/> } />
        <Route path="dunkinrewards" element={ <Dunkinrewards/> } />
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/coffee' element={<CoffeeDisplay/>}/>
        <Route path='/card' element={<RewardCard/>}/>
        <Route path='/shop'element={<ShopItem/>}/>
        <Route path='/shop_detail/:sid'element={<Product/>}/>


        </Route>
         </Routes>


        

    </div>
   
  )
}

export default App
