import React from 'react'

export const PersonalCard = () => {
  return (
    <div className='flex sm:  justify-center items-center flex-col z-20 overflow-hidden rounded-xl bg-slate-100 md:mt-28 md:w-7/12 md:h-60 md:justify-center md:items-center lg:w-6/12 xl:w-5/12 2xl:w-4/12'>
    <div className='sm:w-80 h-40 md:h-60 md:w-full'>
        <div className='flex overflow-hidden justify-around items-center md:h-full'>
            <p className='text-black p-4 sm: text-xs md:text-sm md:px-8'>" I'm a web developer specialized in crafting great user experiences, coupled with my strong backend skills."</p>
            <img className='w-1/2 h-full md:w-1/2' src="/images/potrait.jpeg" alt="" />
        </div>
    </div>

</div>
)
  
}
