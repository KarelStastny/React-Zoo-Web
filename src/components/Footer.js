import "./Footer.scss";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container row">
        <div>
          <h4>© 2023 Světová zoo Všechna práva vyhrazena</h4>
          <Link to="/admin">Admin</Link>
          <SocialMedia />
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
            <a
              href="https://www.kb.cz/cs/obcane"
              target="_blank"
              rel="noopener noreferrer"
            >
              Komerční Banka
            </a>
            <a
              href="https://www.csas.cz/cs/osobni-finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Česká spořitelna
            </a>
            <a
              href="https://www.csas.cz/cs/osobni-finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skupina ČEZ
            </a>
          </section>
          <section>
            <h2>Mapa</h2>
            <div className="map-footer">
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7086.818171322711!2d13.3390759575474!3d49.729863661503366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470aede42ef78651%3A0x1bfab9632b571d22!2sNC%20Borska%20pole!5e0!3m2!1sen!2sus!4v1689057623427!5m2!1sen!2sus"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
