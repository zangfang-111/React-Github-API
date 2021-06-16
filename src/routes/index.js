// React
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  createBrowserHistory,
  Switch
} from 'react-router-dom';

// Components
import App from '../views/app/App';
import Form from '../components/form/Form';
import User from '../views/user/User';
import NotFound from '../views/notfound/NotFound';

class Routes extends React.Component {
	render() {
		return(
			<Router history={createBrowserHistory}>
		  	<Switch>
			    <Route
			        exact
			        component={App}
			        path="/"
			    />
			    <Route
			        component={Form}
			        path="/about"
			    />
			    <Route
			        component={User}
			        path="/user/:username"
			    />
			    <Route
			        component={NotFound}
			    />
		  	</Switch>
			</Router>
		);
	}
}

export default Routes;
