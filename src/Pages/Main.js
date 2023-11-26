import React from 'react'
import '../Pages/Main.css'
import Sidebar from '../Pages/Sidebar/Sidebar.css'
import Home from './Home/Home'


function Main() {
  return (
    <section className='Containerflex' >
        <Sidebar/>
        <Home/>
    </section>
  )
}

export default Main