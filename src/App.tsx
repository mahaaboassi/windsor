import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home/page'
import About from './pages/about/page'
import Service from './pages/services/page'
import CategoryOfService from './pages/services/categoryOfService'
import ContactPage from './pages/contact/page'
import Terms from './pages/terms/page'

function App() {
  
  return (<BrowserRouter>
    <Routes>
      <Route path='/*' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path=':category' element={<CategoryOfService/>}/>
          <Route path=':category/:link' element={<Service/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='terms-and-conditions' element={<Terms/>}/>
      </Route>
    </Routes>
  </BrowserRouter>)
}

export default App
