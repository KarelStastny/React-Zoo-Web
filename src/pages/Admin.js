import React,{ useState } from 'react'
import { Form } from 'react-router-dom'

const Admin = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // přepínač pokud je autorizace správně nebo špatně
    const [isAuthenticated, setIsAuthenticated] = useState(false)


    // Uložení jména a hesla z formuláře
    const writeName = (e) => {
        setUserName(e.target.value)
    }   
    const writePassword = (e) => {
        setPassword(e.target.value)
    }   





    // Přihlášení
    const login = (e) => {
        e.preventDefault()

        // Heslo
        const adminPassword = "admin"
        const adminName = "admin"

        // Oveření hesla a jména
        if(password === adminPassword && userName === adminName){
            setIsAuthenticated(true)
        }else{
            alert ("Nespárvné Heslo. Zkuste to znovu. Heslo je 'admin'" )
        }
    }


    // Pokud není ověřena autorizace připrav formulář

    if(!isAuthenticated){
        // po odeslání zavolat přihlašovací funkci
        return <form className='login-admin-page' onSubmit={login}>
            <input type="text" placeholder='admin' onChange={writeName} />
            <input type="text" placeholder='admin' onChange={writePassword} />
            <input type="submit" />
            </form>
        
    }



  return <div className="admin-page">
        Toto je admin page
  </div>
}

export default Admin

