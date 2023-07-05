import React from 'react'
import Cennik from "./Cennik"
import Prohibitions from '../components/Prohibitions'
import DailyProgram from '../components/DailyProgram'
import Background from '../components/Background'
import Faq from '../components/Faq'





const Home = () => {
  return (
    <div>
    
      <Background/>
      <DailyProgram/>
      <Prohibitions/>
      <Faq/>
    <Cennik/>
    </div>
  )
}

export default Home
