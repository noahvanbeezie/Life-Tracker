import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Input from '@material-ui/core/Input'

function Fitness(){
    return(
        <>
        <div>Fitness</div>
        <Input/>
        </>
        
    )
}

export default withRouter(Fitness)