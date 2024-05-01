import React from 'react'

export const Cards = ({title, route, description,tech,page }) => {
  
 function imgRoute(route){
  let image = document.getElementById('image')

  image.src = route
}
  return (
    <div className=' relative flex z-20 justify-center items-center flex-col rounded-xl overflow-hidden md:w-10/12 md:h-80 lg:w-7/12 lg:h-72 lg:mt-10 lg:mb-0 xl:w-11/12 xl:h-[400px] 2xl: 2xl:w-7/12 2xl:flex-col flex-wrap' >
        <div className='sm: w-80 h-40  md:w-full md:h-full lg:h-full xl:w-full'>
            <div className='w-full flex justify-center items-center title-container '>
                <h1 className=''>{title}</h1>
            </div>
            <div>
              <img className='w-full lg:h-[316px] lg:w-full xl:w-full 2xl:w-full' id='image' src={route} />
            </div>
            <div className='card-detail w-full absolute  h-full  top-20 flex justify-center items-center flex-col gap-48'>
              <a className='visit-button z-50 w-40 h-10 text-center content-center rounded-md bg-slate-800 ' href={page}target='_blank'>Visit site here</a>
              <div className=' w-full h-52 absolute content-center text-center p-4 mb-6 text-sm text-cyan-100'>{description} </div>
              
              <div className='pl-4 bg-slate-950 w-full pb-1 '>{tech}</div>
            </div>
        </div>
        
        
    </div>
  )
}

