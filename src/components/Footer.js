import "./Footer.scss"
import SocialMedia from "./SocialMedia"
import {Link} from "react-router-dom"

const Footer = () => {
  return <footer>
    <div className="footer-container row">
        <div>
            <h4>© 2023 Světová zoo Všechna práva vyhrazena</h4>
            <Link to="/admin">Admin</Link>
            <SocialMedia/>
        </div>
        <div className="footer-all">
            <section>
                <h2>Kde nás najdete:</h2>
                <p>Světová Zoo</p>
                <p>Borské Pole 333/333</p>
                <p>233 33 Plzeň</p>

            </section>
            <section>
                <h2>Kontakt</h2>
                <p>tel.: 111 111 111</p>
                <p>email: zoo@svetovazoo.com</p>
            </section>

            <section>
                <h2>Sponzoři</h2>
                <a href="https://www.kb.cz/cs/obcane" target="_blank" rel="noopener noreferrer">Komerční Banka</a>
                <a href="https://www.csas.cz/cs/osobni-finance" target="_blank" rel="noopener noreferrer">Česká spořitelna</a>
                <a href="https://www.csas.cz/cs/osobni-finance" target="_blank" rel="noopener noreferrer">Skupina ČEZ</a>
            </section>
            <section>
                <h2>Mapa</h2>
                <div className="map-footer">
                    <iframe width="100%" height="150" frameBorder="0" scrolling="no" margintop="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Borsk%C3%A9%20Pole+(Sv%C4%9Btov%C3%A1%20Zoo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>

                </div>

            </section>
        </div>
    </div>
  </footer>
}

export default Footer
