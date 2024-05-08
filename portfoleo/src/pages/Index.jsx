import React from 'react'
import { Header } from '../layout/Header'
import {Home} from '../layout/Home'
import {Projects} from '../layout/Projects'
import {Footer} from '../layout/Footer'


export const Index = () => {
  return (
    <div className='index h-full items-center overflow-hidden'>

      <div className='overflow-hidden border-solid border-2'>
        <div className='block-img h-screen '></div>
      </div>
      
        <Header/>
        
        <Home/>
        <section id='projects' className='h-screen flex justify-center xl:h-[1300px]'>
          
          <Projects/>
         
        
        </section>
        
        <Footer/>
    </div>
  )
}
