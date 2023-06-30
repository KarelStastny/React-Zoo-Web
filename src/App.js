import './App.scss';
import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Aktuality  from "./pages/Aktuality"
import Budoucnost  from "./pages/Budoucnost"
import Home  from "./pages/Home"
import Kariera  from "./pages/Kariera"
import Kontakt  from "./pages/Kontakt"
import Onas  from "./pages/ONas"
import Galerie  from "./pages/Galerie"
import ZnasiZoo  from "./pages/ZnasiZoo"
import Mladata  from "./pages/Mladata"
import Error from './pages/Error';
import Cennik from './pages/Cennik';


const App = () => {

return <div className="app">


<BrowserRouter>
  <Routes>

    {/* Načtení Layoutu aby byl všude */}
    <Route path='/' element={<Layout/>}>
    {/* Jednotlivé stránky */}
        <Route index element={<Home/>} />

        {/* 1 část o nás */}
        <Route path='/o-nas' element={<Onas/>} />
        <Route path='/aktuality' element={<Aktuality/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/kariera' element={<Kariera/>} />
        <Route path='/budoucnost' element={<Budoucnost/>} />

        {/* 2 část Návštěva Zoo */}
        <Route path='/navsteva' element={<Error/>} />
        <Route path='/oteviraci-doba' element={<Error/>} />
        <Route path='/cennik' element={<Cennik/>} />
        <Route path='/vstupenky' element={<Error/>} />
        <Route path='/mapa-zoo"' element={<Error/>} />
        <Route path='/dotazy' element={<Error/>} />

        {/* 3 část Ochrana přírody */}
        <Route path='/ochrana-prirody' element={<Error/>} />
        <Route path='/jak-pomoc' element={<Error/>} />
        <Route path='/mecenas-chovu' element={<Error/>} />

        {/* 4 část Galerie */}
        <Route path='/galerie' element={<Galerie/>} />
        <Route path='/z-nasi-zoo' element={<ZnasiZoo/>} />
        <Route path='/mladata' element={<Mladata/>} />

        {/* Ostatní */}
        <Route path='/zvirata' element={<Error/>} />
        <Route path='/eshop' element={<Error/>} />

    </Route>

  </Routes>
</BrowserRouter>
        
    </div>
}

export default App



