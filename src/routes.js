import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Fitness from './Components/Fitness/Fitness'
import Budget from './Components/Budget/Budget'
import Auth from './Components/Auth/Auth'

export default (
    <Switch>
        <Route path='/fitness' component={Fitness}/>
        <Route path='/budget' component={Budget}/>
        <Route path='/login' component={Auth}/>
    </Switch>
)