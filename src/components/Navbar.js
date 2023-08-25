import "./Navbar.scss";
import DataImages from "../data/DataImages";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import NumberFavorite from "./NumerFavorite";

const Navbar = () => {
  const [mobileVersion, setMobileVersion] = useState(true);
  const [hideClass, setHideClass] = useState(true);

  const setHide = () => {
    setHideClass(!hideClass);
  };

  const mobileVer = () => {
    setMobileVersion(!mobileVersion);
  };

  const pressLink = () => {
    console.log("bylo kliknuto");
    if (mobileVersion === true) {
      // Do nothing
    } else {
      setMobileVersion(true);
      setHideClass(true);
    }
  };
  
  
    
  return (
    <div className={mobileVersion ? "desktop-navbar" : "mobile-navbar"}>
      <section className="up-navbar row">
        <NavLink onClick={() => pressLink()} to="/" className="logo">
          <img src={DataImages[0]} alt="#" />
          <h1>
            Světová <br />{" "}
            <span>
              ZOO{" "}
              <span className="favorite-numer">
                <NumberFavorite />
              </span>
            </span>
          </h1>
        </NavLink>

        <div
          onClick={() => {
            mobileVer();
            setHide();
          }}
          className={hideClass ? "hamburger-hide" : "hamburger-show"}
        >
          <img src={DataImages[6]} alt="#" />
        </div>

        <div className="logo-description">
          <SocialMedia />

          <div className="tickets">
            <NavLink>Vstupenky</NavLink>
          </div>
        </div>
      </section>

      {/* Navabr */}
      <section className="down-navbar">
        <nav className="row">
          <p>Vítejte v naší Světové Zoo</p>

          <ul>
            <div className="big-link">
              <NavLink  onClick={() => pressLink()} to="/o-nas">O nás</NavLink>
              <ul>
                <li onClick={() => pressLink()}>
                  <NavLink onClick={() => pressLink()}  to="/aktuality">Aktuality</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/kontakt">Kontakty</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/kariera">Kariéra</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/zamestnanci">Zaměstnanci</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/mapa">Mapa</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/databaze">Zoo v číslech</NavLink>
                </li>
              </ul>
            </div>

            <div className="big-link">
              <NavLink onClick={() => pressLink()} to="/navsteva">Návštěva Zoo</NavLink>
              <ul>
                <li>
                  <NavLink onClick={() => pressLink()}  to="/oteviraci-doba">Otevírací doba</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/cennik">Cenník</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/vstupenky">Vstupenky</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/mapa">Mapa Zoo</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/dotazy">Časté dotazy</NavLink>
                </li>
              </ul>
            </div>

            <div className="big-link">
              <NavLink onClick={() => pressLink()} to="/ochrana-lesu">Ochrana Přírody</NavLink>
              <ul>
                <li>
                  <NavLink onClick={() => pressLink()} to="/ochrana-lesu">Ochrana lesů</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/ochrana-zvirat">Ochrana zvířat</NavLink>
                </li>
              </ul>
            </div>

            <div className="big-link">
              <NavLink onClick={() => pressLink()} to="/foto">Galerie</NavLink>
              <ul>
                <li>
                  <NavLink onClick={() => pressLink()} to="/mladata">Mláďata</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => pressLink()} to="/foto">Foto</NavLink>
                </li>
              </ul>
            </div>

            <div className="big-link">
              <NavLink onClick={() => pressLink()} to="/zvirata">Zvířata v zoo</NavLink>
            </div>
            <div className="big-link">
              <NavLink  onClick={() => pressLink()} >E-shop</NavLink>
            </div>
          </ul>
          <div
            onClick={() => {
              mobileVer();
              setHide();
            }}
            className={hideClass ? "hamburger-show" : "hamburger-hide"}
          >
            <img src={DataImages[5]} alt="#" />
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
