import React, { Component } from 'react';
import { form, FormGroup, FormControl, ControlLabel, Checkbox, Modal, Button } from 'react-bootstrap';
import ChangePasswordForm from './ChangePasswordForm';
import _ from 'lodash';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForgotPwForm : false,
			user : {
				email: '',
				password: ''
			}
		};
		this.dummyLogin = this.dummyLogin.bind(this);
		this.update = this.update.bind(this);
	}
	showForgotPwForm() {
		this.setState({ showForgotPwForm: true });
	}
	closeForgotPwForm() {
		this.setState({ showForgotPwForm: false});
	}
	update(_args) {
		this.state.user[_args.target.name] = _.trim(_args.target.value);
	}
	login(_args) {	
		_args.preventDefault();	
		console.log(this.state.user);
		setTimeout(this.dummyLogin, 2000);
	}
	dummyLogin() {
		let url = window.location.href;
		let path = url.substr(0, url.indexOf(window.location.hash));
		window.location.href= path + "#/";
	}
	render() {
		return (
			<div className = "_form login-form">			
				<div className="login-form-header">
					<span>LOG IN HERE</span>
				</div>
				<form>
					<div className="login-form-body">		
						<FormGroup controlId='formControlsEmail'>
							<ControlLabel>Email address </ControlLabel>
							<FormControl type='email' name='email' placeholder='example@email.com' onChange={this.update} />
						</FormGroup>
						<FormGroup controlId='formControlsPassword'>
							<ControlLabel>Password</ControlLabel>
							<FormControl type='password' name='password' placeholder='Password' onChange={this.update} />
							<ChangePasswordForm show={this.state.showForgotPwForm} hide={this.closeForgotPwForm.bind(this)} title='Forgot password?' />
							<a onClick={this.showForgotPwForm.bind(this)}>Forgot your password?</a>	
						</FormGroup>
					</div>
					<div className="login-form-footer">	
						<Checkbox>Remember me</Checkbox>		    
						<Button className="app-btn" onClick={this.login.bind(this)}>Login</Button>						
					</div>
				</form>
			</div>
		);
	}
}

export default LoginForm;
