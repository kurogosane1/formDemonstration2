import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './form';
import Home from './home';

class Main extends Component {
   
    render() { 
        return ( 
            <Router>
                <Fragment>
                    <div>
                       
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/icharge">iCharge</Link>
                            </li>
                        </ul>
                        <div className="Route-Output">
                            <Route exact path="/" component={Home}/>
                            <Route path="/icharge" component={Form}/>
                        </div>                    
                    </div>
                </Fragment>
            </Router>
         );
    }
}
 
export default Main;