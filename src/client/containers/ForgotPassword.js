import React, { Component } from 'react';
import AppHeader from '../components/global/AppHeader';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

class ForgotPassword extends Component {	
	render() {
		return (
			<div className='login'>
				<AppHeader />
				<div className="app-body">
					<span style={{paddingLeft: 400}}>
						<ForgotPasswordForm />
					</span>
				</div>
			</div>
		);
	}
}
export default ForgotPassword;