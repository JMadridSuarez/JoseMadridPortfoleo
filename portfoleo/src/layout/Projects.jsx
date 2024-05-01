import React from 'react'
import { Cards } from '../components/Cards'
import {Link} from 'react-router-dom'

export const Projects = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-6 z-2 md:h-full md:flex-col md:gap-10 lg:flex-col  lg:w-9/12  lg:mb-32 2xl:h-[1300px] '>
      
      <Cards title={'MugBlog'} 
              route={'/images/mugblog-3.png'} 
              description={'MugBlog is a personal social media-style blog project, designed to work with a REST API and a Postgres database. The blog integrates user profiles, as well as the creation of articles for each respective user, along with other CRUD functions.'}
              tech={'React, Vite, NodeJs, Postgress, Express, JWT, bcrypt, react-cookies'}
              page={'https://mugblog-frontend.onrender.com'}  />
      <Cards title={'KM Skin type test'} 
            route={'/images/skincare2.png'}
            description={'Skin Test by KM skincare is a test with the purpose of determine your skin type for a better selection of skincare products. '}
            tech={'Astro, JavaScript, HTML, CSS, formspree'}
            page={'https://www.kmskincare.com/'}/>
      <Cards title={'Todoit'} 
              route={'/images/todolist1.png'}
              description={'Practice project for tasks management, implemented with an api Rest, database and login. '}
              tech={'React, NodeJs, Express, Postgres, JWT'}
              page={'https://todolist-g7h2.onrender.com'}  />

    </div>
  )
}
