import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home/page'
import About from './pages/about/page'
import Service from './pages/services/page'

function App() {
  
  return (<BrowserRouter>
    <Routes>
      <Route path='/*' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path=':category/:link' element={<Service/>}/>
      </Route>
    </Routes>
  </BrowserRouter>)
}

export default App
