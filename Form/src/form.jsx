
import React ,{useState} from "react"

function Form (){

    const firstName = ()=>{

    }
    const lastName = () =>{

    }
    const email = () =>{

    }
    const contact = () =>{

    }
    return(
        <div>
            <h1>Form</h1>
            <label htmlFor="">First Name</label><br />
            <input type="text" value={firstName} placeholder="Enter first name" required/>
            <label htmlFor="">Last Name</label><br />
            <input type="text" value={lastName} placeholder="Enter last name" required/>
            <label htmlFor="">Email Address</label><br />
            <input type="email" value={email} placeholder="Enter email name" required/>
            <label htmlFor="">Contact</label><br />
            <input type="tel" value={contact} placeholder="Enter your contact name" required/>
        </div>
    )
}

export default Form