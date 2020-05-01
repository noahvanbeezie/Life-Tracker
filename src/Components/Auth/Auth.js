import React, {useState} from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


function Auth(props){
    const [register,setRegister] = useState(false)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [email,setEmail] = useState('')

    function login(){
        axios.post('/api/login', {username,password}).then(() => {
            props.history.push('/fitness')
            console.log('hit')
        })

    }
    function registerUser(){
        axios.post('/api/register', {username,password,email}).then(() => {
            props.history.push('/fitness')
            console.log('hit')
        })

    }


    return(
        <div>
            {register === false ? (
                <div>
                    <h1>Login</h1>
                    <Input placeholder='Username' onChange={e => setUsername(e.target.value)}></Input>
                    <Input placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}></Input>
                    <Button onClick={() => login()}>Login</Button>
                    <p onClick={() => setRegister(true)}>Don't have an account? Click here</p>
                </div>
            ):(
                <div>
                    <h1>Register</h1>
                    <Input placeholder='Username' onChange={e => setUsername(e.target.value)}></Input>
                    <Input placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}></Input>
                    <Input placeholder='Confirm Password' type='password' onChange={e => setConfirmPassword(e.target.value)}></Input>
                    <Input placeholder='Email (Optional)' onChange={e => setEmail(e.target.value)}></Input>
                    <Button onClick={() => registerUser()}>Register</Button>      
                    <p onClick={() => setRegister(false)}>Already have an account? Click here</p>
                </div>
            )}
            
        </div>
    )
}

export default withRouter(Auth)