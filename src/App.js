import React from 'react';
import routes from './routes'
import Landing from './Components/Landing/Landing'
import { withRouter } from 'react-router-dom'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="App">
        <Landing/>
      <div>
        {routes}
      </div>
      </div>
    </div>
  );
}

export default withRouter(App);
