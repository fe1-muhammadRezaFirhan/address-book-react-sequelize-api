import React, { Component, useEffect } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Create from "../pages/Create";
import Update from "../pages/Update"

class Routes extends Component {
    render() {
        return (
        <BrowserRouter>
          <Route render={(props) =>(
            <div>
              <Switch>
                  <Route exact path='/'>
                    {(props) => (
                      <div className="parent">
                        <Header/>
                      <Home {...props}/>
                      </div>
                      
                    )}
                  </Route>
                  <Route exact path='/detail/:id'>
                    {(props) => (
                      <div className="parent">
                        <Header/>
                        <Detail {...props}/>
                      </div>
                        
                    )}
                      
                  </Route>
                  <Route exact path='/create'>
                    {(props) => (
                      <div className="parent">
                        <Header/>
                        <Create {...props}/>
                      </div>
                        
                    )}
                      
                  </Route>
                  <Route exact path='/update/:id'>
                  {(props) => (
                      <div className="parent">
                        <Header/>
                        <Update {...props}/>
                      </div>
                        
                    )}
                  </Route>
              </Switch>
            </div>
          )}/>  
        </BrowserRouter>
        );
      }
}

export default Routes;

