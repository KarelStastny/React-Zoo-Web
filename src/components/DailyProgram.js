import React from 'react'
import "./DailyProgram.scss"

const DailyProgram = () => {
  return <div className="daily-program row">
    <h1>Denní program </h1>
    <section>
        <h2>Každý den</h2>
        <div className="programe-box">
            <p>10:00 <span> Krmení Orlů Bělohlavých</span></p>
            <p>11:00 <span> Krmení Bezobratlých</span></p>
            <p>12:00 <span> Krmení Tučňáků</span></p>
            <p>13:00 <span> Krmení Ještěrů</span></p>
        </div>
    </section>

    <section>
        <h2>Pondělí</h2>
        <div className="programe-box">

            <p>15:00 <span> Krmení Lvů s výkladem</span></p>
            <p>16:00 <span> Krmení Sobů</span></p>
        </div>
    </section>

    <section>
        <h2>Úterý</h2>
            <div className="programe-box">

                <p>9:00 - 12:00<span> Celodenní program pro školy </span></p>

            </div>
    </section>

    <section>
        <h2>Středa</h2>
            <div className="programe-box">

                <p>15:00<span> Krmení všech Kočkovitých šelem </span></p>
                <p>16:00<span> Setkání u Levhartů </span></p>
            </div>
    </section>

    <section>
    <h2>Čtvrtek</h2>
            <div className="programe-box">

                <p>9:00<span> Krmení Velbloudů </span></p>
                <p>17:00<span> Krmení Vlků </span></p>

            </div>
    </section>

    <section>
    <h2>Pátek</h2>
            <div className="programe-box">

                <p>14:00<span> Setkání u Gibonů </span></p>
                <p>17:00<span> Dětské představení </span></p>

            </div>
    </section>

    <section>
    <h2>Pátek</h2>
            <div className="programe-box">

           
            <p>15:00<span> Krmení všech Kočkovitých šelem </span></p>

            </div>
    </section>

    <section>
    <h2>Víkend a státní svátky</h2>
            <div className="programe-box">

            <p>13:00<span> Setkání u Slonů</span></p>
            <p>14:00<span> Krmení plazů </span></p>
            <p>15:00<span> Krmení všech Kočkovitých šelem </span></p>
            <p>17:00<span> Setkání u Dikobrazů </span></p>

            </div>
    </section>
  </div>
}

export default DailyProgram
