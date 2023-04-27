import products from './productsData'
import { useState,useRef,useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Search(props){

    const [searchTerm,setSearchTerm] = useState("")
    const menuRef = useRef();
    const searchRef = useRef();
    const searchContainerRef = useRef();
    const [menuClass,setMenuClass] = useState(true);
    function showNavBar(){
        setMenuClass(prevClass=> !prevClass)
        props.menuRef.current.classList.toggle("open")
        console.log( props.menuRef.current.classList[1])
    } 

    function closeSearch(){
        setSearchTerm("")
        searchRef.current.value = ""
        searchRef.current.classList.add("toggleSearch")
        searchContainerRef.current.classList.remove("large-width")

    }

    function openSearchBox(){
        searchRef.current.classList.toggle("toggleSearch")
        searchContainerRef.current.classList.toggle("large-width")
    }

    
    useEffect(() => {
        const closeMenu = event => {
            if( props.menuRef.current.classList[1] === "open"){
                props.menuRef.current.classList.toggle("open")
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
            if( props.menuRef.current.classList[1] === "open"){
                props.menuRef.current.classList.remove("open") 
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

    return(
        <div class="h-icons " ref={searchContainerRef}>
    <div className="search">
    <div className="searchInputs">
<input type="text" ref={searchRef} className="search toggleSearch" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
    
{!searchTerm ?  
<i className='bx bx-search' onClick={openSearchBox} ></i>:
<i className='bx bx-x' onClick={closeSearch}></i>}
  
    <Link to="/cart" >
        <i className='bx bx-cart'></i></Link>
    <i className={`bx ${menuClass ? "bx-menu": "bx-x"}`} id="menu-icon" 
    onClick={showNavBar} ></i>

    </div>

<div className="search-item-container">
{products.filter((product)=>{
    if(searchTerm == ""){ return }
    else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return product
    }
 }).map((product=>{
    return(

    <div key={product.id} className="dataResult">
    <Link to={`/singleproduct/${product.id}`} className='links dataItem'
    state={{id:product.key,
            img:product.img,
            name:product.name,
            price:product.price
    }}
    >
    {product.name}  
         </Link>
    {/* <a className="dataItem" key={product.key}>{product.name}</a> */}
    </div>
   )
 }))}
</div>


    </div>
</div>


    )
}


// {products.filter((product)=>{
//     if(props.searchTerm == ""){ return }
//     else if(product.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
//         return product
//     }
//  }).map((product=>{
//     return(
//     <>
//     <ul key={product.id} className="searchedProduct">
//     <li className="list" key={product.key}>{product.name}</li>
//     </ul>
//     </>)
//  }))}
