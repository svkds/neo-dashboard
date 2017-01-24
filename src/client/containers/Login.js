import React, { Component } from 'react';
import AppHeader from '../components/global/AppHeader';
import AppTag from '../components/global/AppTag';
import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';
import ChangePasswordForm from '../components/forms/ChangePasswordForm';

class Login extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			showSignUpForm: false,
			showResetPwForm: false
		};
	}  
	showSignUpForm() {
		this.setState({ showSignUpForm: true});
		this.setState({ showResetPwForm: false});
	}	
	showResetPwForm() {	
		this.setState({ showSignUpForm: false});
		this.setState({ showResetPwForm: true});				
	}
	closeForms() {
		this.setState({ showSignUpForm: false});
		this.setState({ showResetPwForm: false});
	}
    render() {
		return (
			<div className='login'>
				<AppHeader />
				<div className="app-body">
					<span className="app-body-col2">
						<AppTag />
					</span>
					<span className="app-body-col3"> 
						<LoginForm />
						<SignUpForm show={this.state.showSignUpForm} hide={this.closeForms.bind(this)} showResetPwForm={this.showResetPwForm.bind(this)} />
						<ChangePasswordForm show={this.state.showResetPwForm} hide={this.closeForms.bind(this)} title='Reset password'/>
						<a style={{color: 'white', textDecoration: 'none', cursor: 'pointer', borderBottom: '1px solid white'}}
							onClick={this.showSignUpForm.bind(this)}>Sign up</a>
					</span>		
				</div>
			</div>
		);
	}
}
export default Login;