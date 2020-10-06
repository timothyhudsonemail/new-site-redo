import React, {Component} from 'react';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Info from './Info';
import Sidebar from './Sidebar';
import './Styles.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


export default class App extends Component {
render(){
    return(        
        <div>
        <BrowserRouter>
        <div>
         <Header />
         <div className="main">    
             <div className="body">
              <Switch>
              <Redirect exact from="/" to="/shop/boards" />
              <Route exact path="/" component={Home} />
              <Redirect exact from="/shop" to="/shop/boards" />
              <Route path="/shop" component={Shop} />
              <Route exact path="/info" component={Info} />
              </Switch>
             </div>

             <div className="sidebar">
              <Sidebar />
             </div>    
            </div>
            </div>    
        </BrowserRouter>
        </div>
        )
    }
}