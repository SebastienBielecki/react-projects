import React from 'react'
import { FaBars } from 'react-icons/fa'
import App from './App'
import { useGlobalContext } from './context'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext()
  return <>
    <button className='sidebar-toggle' onClick={openSidebar}><FaBars /></button>
    <button className='btn' onClick={openModal}>show modal</button>
  </>
}

export default Home
