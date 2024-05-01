import React, { useState } from 'react'


export const ModalForm = ({onClose}) => {
    const [modal , setModal] = useState(true)

    const hideModal = (e) =>{
        e.preventDefault();
        setModal(false)
    }

    const sendInfo = (e) =>{
        e.preventDefault();
        setModal(false);
    }
    

  return (
    <>
        {modal && <div className='modal-form absolute w-9/12 h-4/6 md:h-3/6 lg:h-5/6 xl:h-4/6 2xl:h-5/6 rounded-lg z-50 flex flex-col justify-center items-center'> 
            <div className='flex flex-col justify-center items-center'>
                <form className=' flex justify-center items-center flex-col w-full h-full gap-2 rounded-lg bg-slate-400' 
                action="https://formspree.io/f/xleqzjdj" method='POST'>

                    <div className='flex '>
                        <h1 className='mr-10 ml-10 text-slate-200'>Contact with me</h1>
                        <button className=' top-0 right-3 w-10 rounded-sm bg-red-800' onClick={onClose}>X</button>
                    </div>
                    <input className='rounded-md bg-slate-700' type="text" placeholder=' Name'/>
                    <input className='rounded-md bg-slate-700' type="email" placeholder=' Email'/>
                    <textarea className='rounded-md bg-slate-700' name="" id="" cols="23" rows="6" placeholder=' Say hi...'></textarea>
                    <input className='rounded-md text-slate-200 bg-slate-700 w-20 h-8 mb-3' type="submit" />
                </form>
            </div>
        
        </div>}
                
    </>
  )
}
