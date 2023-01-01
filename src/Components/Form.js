import '../components.css';
import {useState} from 'react'

// When handling form use name property in input tags
// The input property name must be same as the state object property
// Create the state object having all the attributes of the form like name,email
// Always use value and name for each input
// use the setter function to update the object we created
// event.target.name grabs the name of the tag 
// the tag name is same as form object property so we can write any value there
// event.target.value stores the value into the object

// Handling check boxes in react is different
function Form(){

    const [formData, setFormData] = useState({
        
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:"",
    })

    function handleChange(event){
        // It is good practice to destruct event object and pull out the value you need to use instead of [event.target.name] : event.target.value
        const {name,value,type,checked } = event.target
       setFormData(prevData=>{
        return{
            ...prevData,
            [name] : type ==="checkbox" ? checked : value, 
        }
       })
    }

    function handleSubmit(event){
        event.preventDefault()

    }
    return(

    <div>

    <div className="form-container">
        <h1 className='form-heading'>SEND US MESSAGE</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
           
            <input type="text"
            placeholder="First Name" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} />
            
          
            <input type="text"
            placeholder="Last Name" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
          
          
            <input type="email"
            placeholder="E-mail"
            name="email" 
            value={formData.email}
            onChange={handleChange} />
        
          
            <input type="text"
            placeholder="Phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange} />
          
           
            <textarea  className="input100" name="message" placeholder="Your Message" spellCheck="false"
            value={formData.message}
             onChange={handleChange}/>
            <button className="main-banner-btn">Submit</button>
        </form>
        
    </div>
    </div>
   
    )
}

export default Form;