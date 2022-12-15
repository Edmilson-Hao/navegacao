import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
//import Param from '../../views/examples/Param'
import About from '../../views/examples/About'
//import NotFound from '../../views/examples/NotFound'

import './Content.css'

const Content = props => {
    return(
        <Routes>
            <Route>
                <Route path='/about' element={<About />} />
                {/* <Route path='/param/:id' element={<Param />} /> */}
                <Route path='/' exact element={<Home />} />
                {/* <Route path='*' element={<NotFound />} />             */}
            </Route>
        </Routes>
    )
}

export default Content