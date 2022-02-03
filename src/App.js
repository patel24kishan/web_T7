import { useState } from 'react';
import './App.css';
import ProfilePage from './ProfilePage';
import validator from 'validator';
function App() {

  const [fNname,setFName]=useState('');
  const [lNname,setLName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [registered,setRegistered]=useState(false);

  async function handleSignUp() {
    
     if(!validator.isEmail(email)){
      alert("Invalid Email !!!")
    }
    else {
      setRegistered(true)
    }    
  }

  async function checkPasswordLength() {
    const passwordLength=password.length
    if(passwordLength>=8)
    {
      console.log("Correct length of Password !!!")
    }
    else
    {
      alert ("Password must be 8 characters or more !")
    }
  }
  async function verifyPassword() {
      if (password!==confirmPassword)
      {
          alert("Password doesnt' match !!!")
      }
  }

  async function validateFirstName(e)
  {
      setFName(e.target.value.replace(/[^a-zA-Z]/ig,""));
  }

  async function validateLastName(e)
  {
      setLName(e.target.value.replace(/[^a-zA-Z]/ig,""));
  }

  return (
    <div>
      {(registered) ? (

        <ProfilePage
         FirstName={fNname}
          emailValue={email}
         LastName={lNname}
        />
      ) : (
        <form>
         <br />
          <h2> Registration Page </h2>
          <br />
          <label htmlFor="fNameTag">First Name :  </label>
          <input value={fNname} onChange={validateFirstName.bind(this)} placeholder="First Name" />
          <br />
          <label htmlFor="lNameTag">Last Name :  </label>
          <input value={lNname} onChange={validateLastName.bind(this)} placeholder="Last Name" />
          <br />
          <label htmlFor="userPasswordTag">Password :     </label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder="Password" />
          <br />
          <label >Confirm Password :     </label>
          <input  onClick={checkPasswordLength} onChange={(e)=>setConfirmPassword(e.target.value)} type="password"  placeholder="Confirm Password" />
          <br />
          <label htmlFor="userEmailTag">Email Address :  </label>
          <input  onClick={verifyPassword} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" />
          <br/><br/>
          <button className='registerBtn' onClick={() => { handleSignUp() }}> Sign Up</button>
          </form>
      )}       
    </div>
  );
}

export default App;
