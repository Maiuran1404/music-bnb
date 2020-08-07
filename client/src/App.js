import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from "./containers/Home";
import AddPage from './containers/AddPage';
import InstrumentId from './containers/id';

class App extends Component {
  
  render(){

    console.log(this.state)
    return(
      <Router>
        <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddPage} />
          <Route path='/:id' component={InstrumentId}/>
        </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
