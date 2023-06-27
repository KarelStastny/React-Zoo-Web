import "./Navbar.scss"
import DataImages from "../data/DataImages"


const Navbar = () => {
  return <div className="navbar">
    <section className="up-navbar row">
        <a href="#" className="logo">
            
                <img src={DataImages[0]} alt="" />
                 <h1>Světová <br /> <span>ZOO</span></h1>
       
        </a>
        <div className="logo-description">
            <div className="social-media">
                <div><img src={DataImages[1]} alt="" /></div>
                <div><img src={DataImages[2]} alt="" /></div>
                <div><img src={DataImages[3]} alt="" /></div>
                <div><img src={DataImages[4]} alt="" /></div>
                
            </div>
            <div className="tickets">
                <a href="#">Vstupenky</a>
            </div>
        </div>
    </section>



    {/* Navabr */}
    <section className="down-navbar">
        <nav className="row">
            <ul>
                <li><a href="#">O nás</a>
                    <ul>
                        <li><a href="#">Aktuality</a></li>
                        <li><a href="#">Kontakty</a></li>
                        <li><a href="#">Kariéra</a></li>
                        <li><a href="#">Budoucnost</a></li>
                    </ul>
                </li>

                <li><a href="#">Návštěva Zoo</a>
                    <ul>
                        <li><a href="#">Otevírací doba</a></li>
                        <li><a href="#">Cenník</a></li>
                        <li><a href="#">Vstupenky</a></li>
                        <li><a href="#">Mapa Zoo</a></li>
                        <li><a href="#">Časté dotazy</a></li>
                    </ul>
                </li>

                <li><a href="#">Ochrana Přírody</a>
                    <ul>
                        <li><a href="#">Jak Pomoci</a></li>
                        <li><a href="#">Mecenáš chovu</a></li>
                    </ul>
                </li>

                <li><a href="#">Zvířata v zoo</a></li>
                <li><a href="#">E-shop</a></li>





            </ul>
        </nav>
    </section>
  </div>
}

export default Navbar
