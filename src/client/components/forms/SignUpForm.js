import React, { Component } from 'react';
import { form, FormGroup, FormControl, ControlLabel, HelpBlock, Modal, Button } from 'react-bootstrap';
import _ from 'lodash';

class SignUpFormBody extends Component {
	registerUser(_args) {
		_args.preventDefault();
		console.log(_args);
	}
	render() {
		return(
			<form action='/' onSubmit={this.registerUser.bind(this)} method='POST'>
				<FormGroup controlId='formControlsText'>
					<ControlLabel className='mandatory'>First Name</ControlLabel>
					<FormControl type='text' name='firstName' placeholder='First Name' />
				</FormGroup>
				<FormGroup controlId='formControlsText'>
					<ControlLabel>Last Name</ControlLabel>
					<FormControl type='text' name='lastName' placeholder='Last Name' />
				</FormGroup>
				<FormGroup controlId='formControlsEmail'>
					<ControlLabel className='mandatory'>Email</ControlLabel>
					<FormControl type='email' name='email' placeholder='Email' />
				</FormGroup>
				<FormGroup controlId='formControlsPassword'>
					<ControlLabel className='mandatory'>Password</ControlLabel>
					<FormControl type='password' name='password' placeholder='Password' />
					<HelpBlock>
						Passwords are case sensitive, 8-9 characters long, at least one letter and at least one number (0-9).
						Symbols and spaces are ok.
					</HelpBlock>
				</FormGroup>
				<FormGroup controlId='formControlsPassword'>
					<ControlLabel className='mandatory'>Confirm Password</ControlLabel>
					<FormControl type='password' name='confirmName' placeholder='Confirm Password' />
				</FormGroup>
				<FormGroup controlId='formControlsSelect'>
					<ControlLabel>Business</ControlLabel>
					<FormControl componentClass="select" name='bu' onChange={this.update} >
						<option value="select">select</option>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
					</FormControl>
				</FormGroup>
				<div><span style={{color:'Red', fontWeight:'bold', fontSize: 'smaller'}}>* </span> <span style={{fontSize:14}}>Mandatory fields</span></div>
				<div className='form-footer'>
					<Button className='app-btn' type="submit">CREATE MY ACCOUNT</Button>
				</div>				
			</form>
		);
	}
}

class SignUpForm extends Component {
	render() {
		return(
			<div className='modal-container'>			
				<Modal className='_form modal-form' show={this.props.show} onHide={this.props.hide} container={this.props.container} >			  
					<Modal.Header closeButton>
						<Modal.Title>Create your account</Modal.Title>						
						<label style={{fontSize:12, fontWeight:100}}>
							<a onClick={this.props.hide}> Already have an account? </a>| <a onClick={this.props.showResetPwForm}>Reset Your Password</a>
						</label>
					</Modal.Header>
					<Modal.Body>
						<SignUpFormBody />						
					</Modal.Body>
				</Modal>
			</div>			
		);
	}
}    

export default SignUpForm;