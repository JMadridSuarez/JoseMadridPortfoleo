import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { Index } from '../pages/Index'
import { Project } from '../pages/Project'
import { Projects } from '../layout/Projects'

export const MainRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/*Layout*/}
                
                {/*Pages*/}
                <Route path='/' element={<Index/>}/>
                <Route path='/project/:id' element={<Project/>}/>
                <Route path='/projects' element={<Projects/>}/>
                

            </Routes>
        </BrowserRouter>
    </div>
  )
}
