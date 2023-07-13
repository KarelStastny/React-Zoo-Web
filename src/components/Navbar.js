import "./Navbar.scss"
import DataImages from "../data/DataImages"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import SocialMedia from "./SocialMedia"


const Navbar = () => {

    const [mobileVersion, setMobileVersion] = useState(true)
    const [hideClass, setHideClass] = useState(true)

    const setHide = () => {
        setHideClass(!hideClass)
    }

    const mobileVer = () =>{
        setMobileVersion(!mobileVersion)
    } 


    //     setCross(!cross)
    //     setMobileVersion(!mobileVersion)
    // }
    
    // <p className={"navbar", mobileVersion ? "desktop" : "mobile"}>sfffs</p>

    // zdal jsem standrt mobile abych mohl vytvořit menu pak změnit
  return <div className={mobileVersion ? "desktop-navbar" : "mobile-navbar"}>
    <section className="up-navbar row">
        <NavLink to="/" className="logo">
                <img src={DataImages[0]} alt="#" />
                 <h1>Světová <br /> <span>ZOO</span></h1>
        </NavLink>

        <div onClick={ () => {
                mobileVer() 
                setHide()
                }} 
                className={
                    hideClass ? "hamburger-hide" : "hamburger-show"}>
                        <img src={DataImages[6]} alt="#" />
                        </div>

        <div className="logo-description">
            <SocialMedia/>

            <div className="tickets">
                <NavLink to="/vstupenky" >Vstupenky</NavLink>
        
            </div>
        </div>
    </section>



    {/* Navabr */}
    <section className="down-navbar">
        <nav className="row">
            <p>Vítejte v naší Světové Zoo</p>

            <ul>
                <div className="big-link"><NavLink to="/o-nas" >O nás</NavLink>
                    <ul>
                        <li><NavLink to="/aktuality" >Aktuality</NavLink></li>
                        <li><NavLink to="/kontakt" >Kontakty</NavLink></li>
                        <li><NavLink to="/kariera" >Kariéra</NavLink></li>
                        <li><NavLink to="/zamestnanci" >Zaměstnanci</NavLink></li>
                        <li><NavLink to="/mapa" >Mapa</NavLink></li>
                        <li><NavLink to="/databaze" >Zoo v číslech</NavLink></li>
                    </ul>
                </div>

                <div className="big-link"><NavLink to="/navsteva" >Návštěva Zoo</NavLink>
                    <ul>
                        <li><NavLink to="/oteviraci-doba" >Otevírací doba</NavLink></li>
                        <li><NavLink to="/cennik" >Cenník</NavLink></li>
                        <li><NavLink to="/vstupenky" >Vstupenky</NavLink></li>
                        <li><NavLink to="/mapa" >Mapa Zoo</NavLink></li>
                        <li><NavLink to="/dotazy" >Časté dotazy</NavLink></li>
                    </ul>
                </div>

                <div className="big-link"><NavLink to="/ochrana-prirody" >Ochrana Přírody</NavLink>
                    <ul>
                        <li><NavLink to="/ochrana-lesu" >Ochrana lesů</NavLink></li>
                        <li><NavLink to="/ochrana-zvirat" >Ochrana zvířat</NavLink></li>
                    </ul>
                </div>

                <div className="big-link"><NavLink to="/foto" >Galerie</NavLink>
                <ul>
                        <li><NavLink to="/z-nasi-zoo" >Z naší ZOO</NavLink></li>
                        <li><NavLink to="/mladata" >Mláďata</NavLink></li>
                        <li><NavLink to="/foto" >Foto</NavLink></li>
 
                    </ul>
                </div>


                <div className="big-link"><NavLink to="/zvirata" >Zvířata v zoo</NavLink></div>
                <div className="big-link"><NavLink to="/eshop" >E-shop</NavLink></div>





            </ul>
            <div onClick={ () => {
                mobileVer() 
                setHide()
                }} 
                className={
                    hideClass ? "hamburger-show" : "hamburger-hide"}>
                        <img src={DataImages[5]} alt="#" />
                        </div>
            


        </nav>
    </section>
  </div>
}

export default Navbar
