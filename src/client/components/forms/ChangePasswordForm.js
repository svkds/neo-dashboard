import React, { Component } from 'react';
import { form, FormGroup, FormControl, ControlLabel, HelpBlock, Modal, Button } from 'react-bootstrap';
import _ from 'lodash';

class ChangePasswordForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		}
	}
	updateEmail(_args) {
		this.setState({ email: _.trim(_args.target.value) });
	}
	submitEmail(_args) {
		_args.preventDefault();
		console.log(this.state.email);
	}
	render() {
		return(
			<div className="modal-container">			
				<Modal className='_form modal-form wide-modal-form' show={this.props.show} onHide={this.props.hide} container={this} >				  
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<p> We will send a link on your registered email to reset your password.</p>
						</div>			
						<div style={{paddingBottom:'20'}}>
							<FormControl placeholder="Enter your Email" type="text" onChange={this.updateEmail.bind(this)} />
						</div>
						<div className='form-footer'>
							<Button className='app-btn' type="submit" onClick={this.submitEmail.bind(this)}>SUBMIT</Button>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default ChangePasswordForm;