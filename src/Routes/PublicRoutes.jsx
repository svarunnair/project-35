import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { Menu } from '@mui/material'
import { Man, Woman } from '@mui/icons-material'
import Beauty from '../Pages/Beauty'
import Kids from '../Pages/Kids'
import Men from '../Pages/Men'
import Signin from '../Pages/Auth/Signin'
import Search from '../Pages/Search'
import Help from '../Pages/Help'
import Detail from '../Pages/Detail'
import Cart from '../Pages/Cart'

function PublicRoutes() {
  return (
   
        <Routes>

            
            <Route path='/beauty' element={<Beauty/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/woman' element={<Woman/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/cart' element={<Cart/>}/>



        </Routes>
 
  )
}

export default PublicRoutes