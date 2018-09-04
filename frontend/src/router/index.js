import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../views/home/Home';

class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/home" exact component={Home}></Route>
                    {/* <Route path="/help" exact component={Help}></Route> */}
                    {/* <Route path="/help/helpDetail/:helpId" exact component={HelpDetail}></Route> */}
                    <Redirect from="/*" to="/home" />
                </Switch>
            </Router>
        );
    }
}

export default RouterIndex;