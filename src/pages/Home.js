import React from 'react'
import Cennik from "./Cennik"
import Prohibitions from '../components/Prohibitions'
import DailyProgram from '../components/DailyProgram'
import Background from '../components/Background'
import "./Home.scss"
import Faq from '../components/Faq'
import bg1 from "../images/home-foto/1.jpg"
import bg2 from "../images/home-foto/2.jpg"
import bg3 from "../images/home-foto/3.jpeg"
import bg4 from "../images/home-foto/4.jpg"
import bg5 from "../images/home-foto/5.jpg"
import bg6 from "../images/home-foto/6.jpg"
import {Link} from "react-router-dom"





const Home = () => {
  return  <div className='home-page'>
      <Background/>
    <div className="home-conatainer">
      <h1>Vítejte v Naší Světové Zoo</h1>
      {/* One Section */}
      <section>
        <div style={{background:`url(${bg1})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="left"></div>
        <div  className="right">
          <h2>Zvířata v Zoo</h2>
          <p>Na ploše 14 ha můžete obdivovat přes 170 druhů zvířat (1438 zvířat) ze všech kontinentů. Mezi nejzajímavější chované druhy patří takin čínský, zebra bezhřívá a sob lesní, levhart sněžný, margay, pavián pláštíkový a mangabej žlutobřichý, viskača, dracéna krokodýlovitá nebo ara hyacintový a orlosup bradatý. Zcela mimořádná je naše kolekce horských kopytníků a dravých ptáků.</p>
          <Link to="/zvirata">Naše Zvířata</Link>
        </div>
      </section>

      {/* One Section */}
      <section>
        <div style={{background:`url(${bg2})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="left"></div>
        <div  className="right">
          <h2>Vzácné druhy zvířat a jejich ochrana</h2>
          <p>Vzácné druhy zvířat jsou ohroženými tvory, které hrají důležitou roli v ekosystémech naší planety. Patří sem například tygři, pandy, nosorožci a lední medvědi. Tyto druhy jsou vystaveny různým hrozbám, jako je ztráta přirozeného prostředí, nelegální obchod se zvířaty a lov. Ochrana těchto druhů je nezbytná pro udržení biologické rozmanitosti a ekologické stability. Organizace po celém světě se snaží chránit tyto vzácné druhy prostřednictvím vzdělávání, ochrany přírodních rezervací a regulace obchodu se zvířaty. Je důležité si uvědomit, že zachování těchto druhů je zodpovědností nás všech. Společnými úsilími můžeme zajistit, že tyto vzácné druhy budou mít šanci přežít pro další generace a přispět k bohatství naší planety.</p>
          <Link to="/zvirata">Vzácné druhy zvířat</Link>
        </div>
      </section>

      {/* One Section */}
      <section>
        <div style={{background:`url(${bg3})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="left"></div>
        <div   className="right">
          <h2 >Pomáháme chránit přírodu</h2>
          <p>Ochrana přírody je nezbytná pro zachování ekosystémů, biodiverzity a udržitelnosti naší planety. Zahrnuje snahy o ochranu ohrožených druhů, obnovu přírodních prostředí a udržitelné využívání přírodních zdrojů. Ochrana přírody je důležitá pro udržení ekologické rovnováhy, klimatickou stabilitu a prospěch pro budoucí generace. Je nezbytné přijímat individuální i kolektivní opatření, jako je omezení znečišťování, udržitelné zemědělství a lesnictví, ochrana přírodních rezervací a podpora ekoturistiky. Ochrana přírody je naší odpovědností a investicí do budoucnosti naší planety a všech jejích obyvatel.</p>
          <Link to="/ochrana">Ochrana přírody</Link>
        </div>
      </section>

      {/* One Section */}
      <section>
        <div style={{background:`url(${bg4})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="left"></div>
        <div  className="right">
          <h2>Mláďata narozená v naší Zoo</h2>
          <p>Mláďata narozená v zoo přinášejí radost a naději. Jsou důležitou součástí ochrany ohrožených druhů. Zoo se snaží poskytnout bezpečné prostředí pro rozmnožování a péči o mláďata. Tyto nové přírůstky představují naději pro zachování biodiverzity a oživení populací ohrožených druhů. Jsou zdrojem výzkumu a poznatků o chování a potřebách zvířat. Mláďata narozená v zoo přitahují pozornost veřejnosti a pomáhají vzdělávat o důležitosti ochrany přírody. Jsou to symboly naděje a budoucích generací, které nám připomínají, jak je důležité chránit a respektovat životní prostředí.</p>
          <Link to="/mladata">Naše Mláďata</Link>
        </div>
      </section>

      {/* One Section */}
      <section>
        <div style={{background:`url(${bg5})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="left"></div>
        <div  className="right">
          <h2>Fotografování našich zvířat</h2>
          <p>Fotografování zvířat je uměním zachytit krásu, sílu a jedinečnost živočišného světa. Vyžaduje trpělivost, znalosti a respekt k přírodě. Fotografie zvířat nám umožňují poznat a ocenit jejich rozmanitost a úžasné chování. Při fotografování zvířat je důležité být ohleduplný a nezasahovat do jejich přirozeného prostředí. Respektujme jejich prostor a neovlivňujme jejich chování. Být v souladu s přírodou nám umožní zachytit autentické a emotivní okamžiky. Fotografování zvířat nám dává možnost sdílet jejich krásu a inspirovat další lidi k ochraně přírody.</p>
          <Link to="/foto">Fotogalerie</Link>
        </div>
      </section>

      {/* One Section */}
      <section>
        <div style={{background:`url(${bg6})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="left"></div>
        <div  className="right">
          <h2>Jste vždy vítaní</h2>
          <p>Zoo jsou otevřeny celý rok, aby poskytovaly návštěvníkům možnost prozkoumat a objevovat živočišný svět po celý rok. I když některá zvířata preferují určité roční období, mnoho z nich je aktivních i během zimy. Zoo také přispívají k vzdělávání veřejnosti o ochraně životního prostředí a ochraně ohrožených druhů. Provoz zoo po celý rok také zajišťuje péči a odbornou podporu zvířatům bez ohledu na sezónu. Otevřenost celý rok poskytuje lidem příležitost vytvářet silnější vazby s živočichy a zvyšuje povědomí o důležitosti ochrany přírody.</p>
          <Link to="/open-close">Otevírací doba</Link>
        </div>
      </section>

    </div>

    
    
      <DailyProgram/>
      <Prohibitions/>
      <Faq/>
    <Cennik/>
    </div>
  
}

export default Home
