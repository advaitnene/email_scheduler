import React, {useState} from 'react';
import Nav from '../components/Nav.js'
import '../css/SignUp.css'

const SignUp = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleInputChange = (e) => {
        if (e.target.name === "firstName") {
            setFirstName(e.target.value)
        } else if (e.target.name === "lastName") {
            setLastName(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault() 
    }

    return (
        <>
            <Nav />
            <div className='signUpAlign'>
                <div style={{padding:'65px', border:'1px solid black', borderRadius:'10px'}}>
                    <form>
                        <div className='formElementDiv'>
                            <label className='textStyle' style={{marginBottom:'5px'}}>First Name:</label>
                            <input className='inputFieldStyle' type='text' value={firstName} name="firstName" onChange={handleInputChange}/>
                        </div>
                        <div className='formElementDiv'>
                            <label className='textStyle' style={{marginBottom:'5px'}}>Last Name:</label>
                            <input className='inputFieldStyle' type='text' value={lastName} name="lastName" onChange={handleInputChange}/>
                        </div>
                        <div className='formElementDiv'>
                            <label className='textStyle' style={{marginBottom:'5px'}}>Email:</label>
                            <input className='inputFieldStyle' type='text' value={email} name="email" onChange={handleInputChange}/>
                        </div>
                        <div className='formElementDiv'>
                            <label className='textStyle' style={{marginBottom:'5px'}}>Password:</label>
                            <input className='inputFieldStyle' type='password' value={password} name="password" onChange={handleInputChange}/>
                        </div>
                        <button className='submitButton' type='submit' onClick={handleLoginSubmit}>Submit</button>
                    </form> 
                </div>
            </div>
        </>
    );
}

export default SignUp