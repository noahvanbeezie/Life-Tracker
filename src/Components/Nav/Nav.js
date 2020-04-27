import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom'


function Nav(props){
    return(
        <AppBar>
        <div>
            <h1>Life Tracker</h1>
            <div>
                <Button onClick={() => props.history.push('/login')}>Login</Button>
                <Button onClick={() => props.history.push('/fitness')}>Fitness</Button>
                <Button onClick={() => props.history.push('/budget')}>Budget</Button>
            </div>
        </div>
        </AppBar>
    )
}
export default withRouter(Nav)