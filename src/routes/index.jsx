import React from "react";
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Page404 from '../pages/404'

export default () => {
    return (
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='*' component={Page404} />
            </Switch>
    )
}
