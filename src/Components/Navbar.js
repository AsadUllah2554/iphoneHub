import '../components.css';
import { useState,useRef,useEffect } from 'react';
import {Link} from 'react-router-dom'
import Search from './Search';

function NavBar() {

    const menuRef = useRef();
    return (

      <>
        <header>
            <div className="logo"> 
           <Link to="/"> <img src="./images/logo1.png" alt="logo" 
             className="nav-logo" /></Link>
            </div>
            <nav>
            <ul className='nav-items' ref={menuRef}>
                <li><Link to="/" className='links'> Home </Link></li>
                <li><Link to="/iphone" className='links'> iPhone </Link></li>
                <li><Link to="/watches" className='links'> Apple Watch </Link></li>
                <li><Link to="/airpods" className='links'> Airpods </Link></li>
                <li><Link to="/" className='links'> Why iPhone Hub? </Link></li>
                <li><Link to="/contactus" className='links'> Contact Us </Link></li>
                <li><Link to="/signup" className='links'>Signup/Login </Link></li>
            </ul>
            </nav>
     <Search menuRef={menuRef}/>
   </header>
     
 </>
    )
}

export default NavBar;