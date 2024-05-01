import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='h-1/2   md:ml-3 flex justify-center w-auto ml-16 z-20  lg:ml-8' >
      <Link className='w-14' to="/"><img src="/public/J.svg" alt="" /></Link>

    </div>
  )
}
