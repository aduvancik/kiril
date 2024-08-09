import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing'
//STYLE
import "./reset.css";

export default function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
      </div>
  )
}
