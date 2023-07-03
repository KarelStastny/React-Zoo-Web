import React from 'react'
import Cennik from "./Cennik"
import Prohibitions from '../components/Prohibitions'
import DailyProgram from '../components/DailyProgram'
import Background from '../components/Background'





const Home = () => {
  return (
    <div>
      <Background/>
      <DailyProgram/>
      <Prohibitions/>

    <Cennik/>
    </div>
  )
}

export default Home
