import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AdminHome, Home, Login, Register } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <Register></Register>
                </Route>
                <Route path="/admin">
                    <AdminHome></AdminHome>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
