import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import './App.css'

const App = () => {
  return (
    <div>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Home/>
        <div className='others'></div>
      </div>
    </div>
  )
}

export default App