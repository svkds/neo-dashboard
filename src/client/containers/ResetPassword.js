import React, { Component } from 'react';
import AppHeader from '../components/global/AppHeader';
import ResetPasswordForm from '../components/forms/ResetPasswordForm';

class ResetPassword extends Component {	
	render() {
		return (
			<div className='login'>
				<AppHeader />
				<div className="app-body">
					<span style={{paddingLeft: 400}}>
						<ResetPasswordForm />
					</span>
				</div>
			</div>
		);
	}
}
export default ResetPassword;