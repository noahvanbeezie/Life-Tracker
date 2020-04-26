import React, {useState} from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'


function Auth(props){
    const [register,setRegister] = useState(false)


    return(
        <div>
            <p>Test</p>
            {register === false ? (
                <div>
                    <h1>Login</h1>
                    <Input placeholder='Username'></Input>
                    <Input placeholder='Password'></Input>
                    <Button>Login</Button>
                    <p onClick={() => setRegister(true)}>Don't have an account? Click here</p>
                </div>
            ):(
                <div>
                    <h1>Register</h1>
                    <Input placeholder='Username'></Input>
                    <Input placeholder='Password'></Input>
                    <Input placeholder='Confirm Password'></Input>
                    <Input placeholder='Email (Optional)'></Input>
                    <Button>Register</Button>      
                    <p onClick={() => setRegister(false)}>Already have an account? Click here</p>
                </div>
            )}
            
        </div>
    )
}

export default withRouter(Auth)