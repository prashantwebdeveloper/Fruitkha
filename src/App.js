import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Fruitkha/Home';
import About from './Fruitkha/About';
import Shop from './Fruitkha/Shop';
import Single_Product from './Fruitkha/Single_Product';
import WishList from './Fruitkha/WishList';
import Cart from './Fruitkha/Cart';
import CheckOut from './Fruitkha/CheckOut';
import News from './Fruitkha/News';
import Single_News from './Fruitkha/Single_News';
import Contact from './Fruitkha/Contact';

  // Project-15 :- Final Project (User) (// git new account-2 --"prashantwebdeveloper") 
    
function App() {


    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='/' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Shop' element={<Shop />} />
                        <Route path='/Single_Product' element={<Single_Product />} />
                        <Route path='/WishList' element={<WishList />} />
                        <Route path='/Cart' element={<Cart />} />
                        <Route path='/CheckOut' element={<CheckOut />} />
                        <Route path='/News' element={<News />} />
                        <Route path='/Single_News' element={<Single_News />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
