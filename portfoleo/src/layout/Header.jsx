import React from 'react'
import {Logo} from '../components/Logo'
import {Nav} from '../components/Nav'
import { DayNNightMode } from '../components/DayNNightMode'

export const Header = () => {
  return (
    <div className='h-28 flex justify-center md:justify-between items-center md:flex-row  flex-col '>
      <div className='h-20  md:h-full md:w-8/12 flex justify-center md:justify-between items-center xl:w-10/12 xl:mr-4'>
        <Logo/>
        <DayNNightMode/>
      </div>
     
      <Nav/>
    </div>
  )
}
