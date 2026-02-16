"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import NavMobile from './NavMobile'

const NavResponsive = () => {
    const [showNav, setShowNav] = useState(false);
    const openNavHandler=()=> setShowNav(true);
    const closeNavHandler=()=> setShowNav(false);
    
  return (
    <div>
        <Nav openNav={openNavHandler}/>
        <NavMobile showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default NavResponsive