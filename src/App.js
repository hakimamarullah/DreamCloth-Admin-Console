import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/users' element={<UserList/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App