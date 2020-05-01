import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Fitness from './Components/Fitness/Fitness'
import Budget from './Components/Budget/Budget'
import Auth from './Components/Auth/Auth'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Auth}/>
        <Route path='/fitness' component={Fitness}/>
        <Route path='/budget' component={Budget}/>
    </Switch>
)