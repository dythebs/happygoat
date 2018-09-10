import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../views/home/Home';
import Anli from '../views/anli/Anli';
import Jiudian from '../views/jiudian/Jiudian';
import Sheying from '../views/sheying/Sheying';

class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/AnLi/:page" exact render={props => <Anli {...props}/>}></Route>
                    <Redirect from="/AnLi/page/:page" to="/AnLi/:page"exact component={Anli}></Redirect>
                    <Route path="/Jiudian/:page" exact render={props => <Jiudian {...props}/>}></Route>
                    <Route path="/Sheying" exact render={ props => <Sheying {...props}/>}></Route>
                    {/* <Route path="/help" exact component={Help}></Route> */}
                    {/* <Route path="/help/helpDetail/:helpId" exact component={HelpDetail}></Route> */}
                    <Redirect from="/*" to="/home" />
                </Switch>
            </Router>
        );
    }
}

export default RouterIndex;