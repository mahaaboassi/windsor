import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home/page'
import About from './pages/about/page'
import Service from './pages/services/page'
import CategoryOfService from './pages/services/categoryOfService'
import ContactPage from './pages/contact/page'
import Terms from './pages/terms/page'
import PaymentMethodsPage from './pages/paymentMethods/page'
import SpecialOffers from './pages/specialOffers/page'
import Blog from './pages/blog/page'
import DetailsBlog from './pages/blog/blogDetails'

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='/*' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='terms-and-conditions' element={<Terms/>}/>
          <Route path=':category' element={<CategoryOfService/>}/>
          <Route path=':category/:link' element={<Service/>}/>
          <Route path='payment-options' element={<PaymentMethodsPage/>}/>
          <Route path='special-offers' element={<SpecialOffers/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='blog/:link' element={<DetailsBlog/>}/>
      </Route>
    </Routes>
  </BrowserRouter>)
}

export default App
