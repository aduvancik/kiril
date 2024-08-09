import React from 'react'
import { Outlet } from 'react-router-dom';
//components
import Footer from '../footer/Footer';
import Header from '../header/Header';
//style
import "./loyout.scss";

export default function Loyout() {
  return (
    <div className='layout-container'>
      <Header />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
