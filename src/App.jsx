import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNav from './components/Side-nav'
import Home from './components/Home'

function App() {

  return (
    <div className='flex'>
      <SideNav />
      <div className='flex-1 flex items-center justify-center'>
        <Home />
      </div>
    </div>
  )


}

export default App
