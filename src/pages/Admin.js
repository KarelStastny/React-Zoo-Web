import React,{ useState } from 'react'
import "./Admin.scss"

import ActualityForm from '../components/ActualityForm'

const Admin = () => {
    // const [userName, setUserName] = useState("")
    // const [password, setPassword] = useState("")
    // // přepínač pokud je autorizace správně nebo špatně
    // const [isAuthenticated, setIsAuthenticated] = useState(false)


    // // Uložení jména a hesla z formuláře
    // const writeName = (e) => {
    //     setUserName(e.target.value)
    // }   
    // const writePassword = (e) => {
    //     setPassword(e.target.value)
    // }   

    // // Přihlášení
    // const login = (e) => {
    //     e.preventDefault()

    //     // Heslo
    //     const adminPassword = "admin"
    //     const adminName = "admin"

    //     // Oveření hesla a jména
    //     if(password === adminPassword && userName === adminName){
    //         setIsAuthenticated(true)
    //     }else{
    //         alert ("Nespárvné Heslo. Jméno i Heslo jsou 'admin'" )
    //     }
    // }

    // // Pokud není ověřena autorizace připrav formulář

    // if(!isAuthenticated){
    //     // po odeslání zavolat přihlašovací funkci
    //     return <form className='login-admin-page' onSubmit={login}>
    //         <input type="text" placeholder='jméno "admin"' onChange={writeName} />
    //         <input type="text" placeholder='heslo "admin"' onChange={writePassword} />
    //         <input type="submit" />
    //         </form>
        
    // }



  return <ActualityForm/>
}

export default Admin

