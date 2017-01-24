import React, { Component } from 'react';
import { form, FormGroup, FormControl, ControlLabel, HelpBlock, Modal, Button } from 'react-bootstrap';
import _ from 'lodash';

class ResetPasswordForm extends Component {
	registerUser(_args) {
		_args.preventDefault();
		console.log(_args);
	}
	render() {
		return(
			<form className='standalone-forms' action='/' onSubmit={this.registerUser.bind(this)} method='POST'>
				<div className='form-header'>
					RESET YOUR PASSWORD
				</div>
				<div className='form-body'>
					<FormGroup controlId='formControlsText'>
						<ControlLabel>Please enter your username</ControlLabel>
						<FormControl type='text' name='userName' placeholder='Username' />
					</FormGroup>
					<FormGroup controlId='formControlsPassword'>
						<ControlLabel>Old Password</ControlLabel>
						<FormControl type='password' name='oldPassword' placeholder='Old Password' />						
					</FormGroup>
					<FormGroup controlId='formControlsPassword'>
						<ControlLabel>New Password</ControlLabel>
						<FormControl type='password' name='newPassword' placeholder='New Password' />
						<HelpBlock style={{fontSize:12}}>
							Passwords are case sensitive, 8-9 characters long, at least one letter and at least one number (0-9).
							Symbols and spaces are ok.
						</HelpBlock>
					</FormGroup>
					<FormGroup controlId='formControlsPassword'>
						<ControlLabel>Confirm Password</ControlLabel>
						<FormControl type='password' name='confirmPassword' placeholder='Confirm Password' />						
					</FormGroup>
				</div>
				<div className='form-footer'>
					<Button className='app-btn' type="submit">RESET PASSWORD</Button>
				</div>				
			</form>
		);
	}
}

export default ResetPasswordForm;