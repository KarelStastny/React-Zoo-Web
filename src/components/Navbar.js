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
    <section className="down-navbar"></section>
  </div>
}

export default Navbar
