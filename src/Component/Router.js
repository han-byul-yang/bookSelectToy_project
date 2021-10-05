import React from "react";
import {Route, HashRouter, Switch} from 'react-router-dom'
import Home from './Routes/Home/index'
import Question1 from './Routes/Question/Question1'
import Question2 from './Routes/Question/Question2'
import Question3 from './Routes/Question/Question3'
import Result from './Routes/Result'

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/q1" exact component={Question1}></Route>
                <Route path="/q2" exact component={Question2}></Route>
                <Route path="/q3" exact component={Question3}></Route>
                <Route path="/result" exact component={Result}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Router