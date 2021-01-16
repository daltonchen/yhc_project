import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import secondWebpage from "./secondWebpage";
import firstWebpage from "./firstWebpage"
import {Component} from 'react'


class BasicRoute extends Component{
    render(){
        return (
            <HashRouter>

                <Switch>
                    <Route exact path="/" component={firstWebpage}/>
                    <Route exact path="/second" component={secondWebpage}/>


                </Switch>



            </HashRouter>
        )
    }
}


export default BasicRoute;