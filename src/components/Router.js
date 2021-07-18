import React from "react"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Auth from "routes/Auth"
import Home from "routes/Home"
import Profile from "routes/Profile"
import Navigation from "./Navigation"

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
        <BrowserRouter>
        {isLoggedIn? <Navigation /> :null}
            <Switch>
                {isLoggedIn? 
                <>
                    <Route exact path="/"><Home userObj={userObj} /></Route>
                    <Route exact path="/profile"><Profile /></Route>
                    <Redirect from="*" to="/" />
                </>
                :
                <>
                    <Route exact path="/"><Auth /></Route>
                    <Redirect from="*" to="/" />
                </>
                }
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter