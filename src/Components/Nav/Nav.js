import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'


function Nav(){
    return(
        <AppBar>
        <div>
            <h1>Life Tracker</h1>
            <div>
                <Button>Test1</Button>
                <Button>Test2</Button>
                <Button>Test3</Button>
            </div>
        </div>
        </AppBar>
    )
}
export default Nav