import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import Login from './Login';
import Home from './Home';
import ServicesPackages from './ServicesPackages';
import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';

const routes = (
	<Route>		
		<Route path="/" component={Home} />
		<Route path="/login" component={Login} />
		<Route path="/contactus" component={ContactUs} />
		<Route path="/servicesPackages" component={ServicesPackages} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path='/resetpassword' component={ResetPassword} />
		<Route path='/forgotpassword' component={ForgotPassword} />
	</Route>
);

export default class Root extends Component {
	render() {
		const { history } = this.props;
		return (			
			<Router routes={routes} history={history} />			
		);
	}
}