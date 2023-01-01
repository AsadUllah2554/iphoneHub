import '../components.css';
import { useState,useRef,useEffect } from 'react';

import {Link} from 'react-router-dom'

function NavBar() {
    const [menuClass,setMenuClass] = useState(true);
    const menuRef = useRef();
    function showNavBar(){
        setMenuClass(prevClass=> !prevClass)
        menuRef.current.classList.toggle("open")
        console.log(menuRef.current.classList[1])
    }
    useEffect(() => {
        const closeMenu = event => {
            if(menuRef.current.classList[1] === "open"){
            menuRef.current.classList.remove("open")
            setMenuClass(prevClass => !prevClass)
        }
        };
        document.addEventListener('mousedown', closeMenu);
        return () => {
        document.removeEventListener('mousedown', closeMenu);
          
        };
      }, []);

      useEffect(() => {
        const closeMenuOnScroll = event => {
            if(menuRef.current.classList[1] === "open"){
            menuRef.current.classList.remove("open") 
            setMenuClass(prevClass => !prevClass)
        }
        };
        document.addEventListener('scroll', closeMenuOnScroll);
        return () => {
        document.removeEventListener('scroll', closeMenuOnScroll);
          
        };
      }, []);

    //   useEffect(() => {
    //     const closeMenu = event => {
    //         if(!menuRef.current.contains(event.target)){
    //             setMenuClass(false)  
    //         }
    //         menuRef.current.classList.remove("open")
    //        console.log("scrolled")
    //         // setMenuClass(prevClass => !prevClass)
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
          
    //     };
    //   }, []);

    return (

      
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
                <li><Link to="/" className='links'> Accessories </Link></li>
                <li><Link to="/" className='links'> Why Iphone Hub? </Link></li>
                <li><Link to="/contactus" className='links'> Contact Us </Link></li>
                <li><Link to="/signup" className='links'>Signup/Login </Link></li>
            </ul>
            </nav>

     <div class="h-icons">
    <Link to="/cart" >
        <i className='bx bx-search'></i></Link>

    <Link to="/cart" >
        <i className='bx bx-cart'></i></Link>

    <i className={`bx ${menuClass ? "bx-menu": "bx-x"}`} id="menu-icon" 
    onClick={showNavBar} ></i>
    </div>
           
        </header>

    )
}

export default NavBar;