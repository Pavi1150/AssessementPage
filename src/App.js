import React from 'react'
import Navbar from './Components/Navbar'
import OfferImage from './Components/OfferImage'
import BestSeller from './Components/BestSeller'
import Adidas from './Components/Adidas'
import Shipping from './Components/Shipping'
import Latestnews from './Components/Latestnews'
import Featuredproducts from './Components/Featuredproducts'
import Footer from './Components/Footer'
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import Product from './redux/product'

const store=createStore(Product);


function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar/>
      <OfferImage/>
      <BestSeller/>
      <Adidas/>
      <Shipping/>
      <Latestnews/>
      <Featuredproducts/>
      <Footer/>
      </Provider>

    </div>
  )
}

export default App