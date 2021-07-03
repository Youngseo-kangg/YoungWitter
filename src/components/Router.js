import React, { useState } from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Auth from "../routes/Auth"
import Home from "../routes/Home"

const AppRouter = () => {
    const {isLoggedIn, setIsLoggedIn} = useState(true)
    return (
        <BrowserRouter>
            <Switch>
                {isLoggedIn? 
                <Route exact path="/"><Home /></Route>
                :
                <Route exact path="/"><Auth /></Route>
                }
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter