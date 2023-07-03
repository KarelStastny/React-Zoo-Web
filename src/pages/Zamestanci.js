import React from 'react'
import "./Zamestnanci.scss"
import { useState, useEffect } from 'react'



const url = "https://randomuser.me/api?results=99"

const Zamestanci = () => {
  const [employee, setEmployee] = useState([])

  // v natažení Api mi to běhá stále dokola??? potřebuju nějak zastavit to natahování 
useEffect( () => {
  fetch(url)
  .then( (response) => response.json())
  .then( (data) => {
    // console.log(data.results);
      setEmployee(data.results)
  })

},[])


  return <div className='zoo-zamestnaci row'>
    {

      employee.map( (one, index) => {
   
       return <div key={index} className="one-person">
            <img src={one.picture.large} alt={`${one.name.title} ${one.name.first} ${one.name.last}`} />
            <article>
              <h2>{`${one.name.title}. ${one.name.first} ${one.name.last}`}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vo Tempore nam, impedit facere sunt quam maiores ullam rem veritatis unde facilis beatae temporibus corporis.</p>
       

            </article>
            
        </div>
          
        

      })
    }






  </div>
}

export default Zamestanci
