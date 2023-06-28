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


const App = () => {

return <div className="app">


<BrowserRouter>
  <Routes>

    {/* Načtení Layoutu aby byl všude */}
    <Route path='/' element={<Layout/>}>
    {/* Jednotlivé stránky */}
        <Route index element={<Home/>} />
        <Route path='/o-nas' element={<Onas/>} />
        <Route path='/o-nas/aktuality' element={<Aktuality/>} />
        <Route path='/o-nas/kontakt' element={<Kontakt/>} />
        <Route path='/o-nas/kariera' element={<Kariera/>} />
        <Route path='/o-nas/budoucnost' element={<Budoucnost/>} />



        <Route path='/galerie' element={<Galerie/>} />
        <Route path='/galerie/z-nasi-zoo' element={<ZnasiZoo/>} />
        <Route path='/galerie/mladata' element={<Mladata/>} />

    </Route>

  </Routes>
</BrowserRouter>
        
    </div>
}

export default App



