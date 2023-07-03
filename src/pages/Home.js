import React from 'react'
import Cennik from "./Cennik"
import Prohibitions from '../components/Prohibitions'
import DailyProgram from '../components/DailyProgram'




const Home = () => {
  return (
    <div>
      <DailyProgram/>
      <Prohibitions/>

    <Cennik/>
    </div>
  )
}

export default Home
