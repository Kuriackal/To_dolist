import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event){
        event.preventDefault()
       const response=await fetch('http://localhost:8001/api/register',{
        method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                password,
            }),
        })  
        const data= await response.json()
        if(data.status==='ok'){
            alert('Registration is successful')
        }
        else{
            alert("Already registered")
        }
        console.log(data)
    }
  return (
    <div style={{backgroundColor:" #fff5d7"}} 
        className='d-flex flex-column align-items-center justify-content-center min-vh-100 '
    >
      <h1>Register</h1>
      <form onSubmit={registerUser} style={{backgroundColor:"#FFFF"}} className="container d-flex flex-column align-items-center border border-primary rounded p-4 w-25 " action="">
        <div className=" justify-content-center align-items-center">
            <div className='form-outline w-100 py-2'>
             <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name" aria-label="name"/>
            </div>
             <div className='form-outline w-100 py-2' >
                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the email" aria-label="email"/>
            </div>
             <div className='form-outline w-100 py-2' >
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the password" aria-label="password"/>
            </div>
             <div className='py-2 ' >
               {/* <button className='btn btn-primary'>Register</button> */}
               <input type="submit" className='btn btn-primary' value="Register" />
            </div>
            <div>Already Register? <Link to='/'>Login</Link></div>
        </div>
    </form>
    </div>
  )
  }

export default Register
