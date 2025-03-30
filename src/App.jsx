import { Link , BrowserRouter, Route, Routes} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'
import Layout from './components/Layout'
import VanDetail from './pages/VanDetail'
import Host from './pages/Host/Host'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Hostvans from './pages/Host/Hostvans'
import Hostlayout from './components/Hostlayout'
import HostvanDetail from './pages/Host/HostvanDetail'
import Pricing from './pages/Host/Pricing'
import Photos from './pages/Host/Photos'
import Details from './pages/Host/Details'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Auth from './components/Auth'


import './App.css'

function App() {

  return ( 
  
  <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="vans" element={<Vans/>} />
          <Route path="vans/:id" element={<VanDetail/>} />
          <Route
            path="login"
            element={<Login />}
          />


        <Route  element={<Auth/>}>
          <Route path="host" element={<Hostlayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income/>} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="vans" element={<Hostvans/>} />
            <Route path="vans/:id" element={<HostvanDetail/>} >
              <Route index element={<Details/>} />
              <Route path="pricing" element={<Pricing/>} />
              <Route path="photos" element={<Photos/>} />
            </Route>
        </Route>

          </Route>

          <Route path="*" element={<NotFound/>} />

        </Route >
      </Routes>

      

        </BrowserRouter>
      </div>




  )
}

export default App
