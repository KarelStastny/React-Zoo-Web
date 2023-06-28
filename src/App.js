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


const App = () => {

return <div className="app">


<BrowserRouter>
  <Routes>

    {/* Načtení Layoutu aby byl všude */}
    <Route path='/' element={<Layout/>}>
    {/* Jednotlivé stránky */}
        <Route index element={<Home/>} />
        <Route path='/o-nas' element={<Onas/>} />
        <Route path='/aktuality' element={<Aktuality/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/kariera' element={<Kariera/>} />
        <Route path='/budoucnost' element={<Budoucnost/>} />

    </Route>

  </Routes>
</BrowserRouter>
        
    </div>
}

export default App



