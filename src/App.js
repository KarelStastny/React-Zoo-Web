import './App.scss';
import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Aktuality  from "./pages/Aktuality"
import Home  from "./pages/Home"
import Kariera  from "./pages/Kariera"
import Kontakt  from "./pages/Kontakt"
import Onas  from "./pages/ONas"
import ZnasiZoo  from "./pages/ZnasiZoo"
import Mladata  from "./pages/Mladata"
import Error from './pages/Error';
import Cennik from './pages/Cennik';
import Zamestnanci from './pages/Zamestanci';
import Mapa from './pages/Mapa';
import OteviraciDoba from './pages/OteviraciDoba';
import Foto from './pages/Foto';
import OneKariera from './components/OneKariera';
import CasteOtazky from './pages/CasteOtazky';
import Zvirata from './pages/Zvirata';
import OneZvire from './pages/OneZvire';
import Admin from './pages/Admin';
import OchranaLesu from './pages/OchranaLesu';
import OchranaZvirat from './pages/OchranaZvirat';
import Databaze from './pages/Databaze';


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
        <Route path='/kariera/:karieraId' element={<OneKariera/>} />
        <Route path='/zamestnanci' element={<Zamestnanci/>} />
        <Route path='/mapa' element={<Mapa/>} />
        <Route path='/databaze' element={<Databaze/>} />

        {/* 2 část Návštěva Zoo */}
        <Route path='/navsteva' element={<Error/>} />
        <Route path='/oteviraci-doba' element={<OteviraciDoba/>} />
        <Route path='/cennik' element={<Cennik/>} />
        <Route path='/vstupenky' element={<Error/>} />
        <Route path='/mapa-zoo"' element={<Mapa/>} />
        <Route path='/dotazy' element={<CasteOtazky/>} />

        {/* 3 část Ochrana přírody */}
        <Route path='/ochrana-prirody' element={<OchranaZvirat/>} />
        <Route path='/ochrana-lesu' element={<OchranaLesu/>} />
        <Route path='/ochrana-zvirat' element={<OchranaZvirat/>} />

        {/* 4 část Galerie */}
        <Route path='/foto' element={<Foto/>} />
        <Route path='/z-nasi-zoo' element={<ZnasiZoo/>} />
        <Route path='/mladata' element={<Mladata/>} />
        <Route path='/foto' element={<Foto/>} />

        {/* Ostatní */}
        <Route path='/zvirata' element={<Zvirata/>} />
        <Route path='/zvirata/:zvirataId' element={<OneZvire/>} />
        <Route path='/eshop' element={<Error/>} />
        <Route path='/admin' element={<Admin/>} />

    </Route>

  </Routes>
</BrowserRouter>
        
    </div>
}

export default App



