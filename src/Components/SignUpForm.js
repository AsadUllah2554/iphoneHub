import '../components.css';
import {useState} from 'react'

function SignUpForm(){

    const [authFormData,setAuthFormData] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        newsLetter:false,
    })

    
    function handleChange(event){
        const {name,value,type,checked} = event.target
        setAuthFormData(prevData=>{
          return{  ...prevData,
            [name] : type ==="checkbox" ? checked : value
        }})
    }
    function handleSubmit(event){
        event.preventDefault();
        authFormData.email.length===0 && console.log("Please Enter Email"  
      ) 
        if(authFormData.password === authFormData.confirmPassword){
            console.log("SuccessFully Signed up")
        }
        else{
            console.log("Passwords do not match")
            return
        }
      authFormData.newsLetter===true && console.log("Thanks for signing up for newsletter")
      
      
    }

    return(

        <div className="form-container">
             <h1 className='form-heading'>SIGN UP</h1>
        <form  onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="email"
                placeholder="Email address"
                value={authFormData.email}
                onChange={handleChange}
            />
            <input 
                type="password" 
                name="password"
                placeholder="Password"
                value={authFormData.password}
                 onChange={handleChange}
            />
            <input 
                type="password" 
                name="confirmPassword"
                placeholder="Confirm password"
                value={authFormData.confirmPassword}
                 onChange={handleChange}
            />
            
            <div className="form--marketing">
                <input
                    name="newsLetter"
                    id="okayToEmail"
                    type="checkbox"
                    checked={authFormData.newsLetter}
                    onChange={handleChange}
                    className="check-box"
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button className="main-banner-btn">
                Sign up
            </button>
        </form>
    </div>
    )
}

export default SignUpForm;