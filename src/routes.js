import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Fitness from './Components/Fitness/Fitness'
import Budget from './Components/Budget/Budget'

export default (
    <Switch>
        <Route path='/fitness' component={Fitness}/>
        <Route path='/budget' component={Budget}/>
    </Switch>
)