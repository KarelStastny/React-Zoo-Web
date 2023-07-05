import React from 'react'
import Cennik from "./Cennik"
import Prohibitions from '../components/Prohibitions'
import DailyProgram from '../components/DailyProgram'
import Background from '../components/Background'
import Faq from '../components/Faq'





const Home = () => {
  return (
    <div>
      <Faq/>
      <Background/>
      <DailyProgram/>
      <Prohibitions/>

    <Cennik/>
    </div>
  )
}

export default Home
