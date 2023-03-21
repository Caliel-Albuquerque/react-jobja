import { useState } from 'react'

import router from './config/routes'
import {RouterProvider } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
