import React, { Component } from 'react';
import { form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import _ from 'lodash';
import MessageDialog from './MessageDialog';


class ContactUsForm extends Component {
	constructor(props) {
		super(props);	
		this.state = {
			formdata : {
				firstName: '',
				lastName: '',
				email: '',
				company: '',
				query: ''
			},
			showSubmitMessage: false
		}	
		this.updateData = this.updateData.bind(this);
	}
	closeSubmitMessage() {
		this.setState({showSubmitMessage: false});
	}
	submit(args) {
		args.preventDefault();
		console.log("Submit Contact Us form:");
		console.log(this.state.formdata);
		this.setState({showSubmitMessage: true});
	}
	updateData(_args) {
		let value = _.trim(_args.target.value);
		let field = _args.target.name;
		this.state.formdata[field] = value;		
	}
	render() {
		let successMsg = 'Thanks for registering your query with us! Neo Team would get back to you in 2 hrs time.';
		return (
			<div className = "_form contactus-form">
					<form>
						<div style={{display: 'flex'}}>
							<FormGroup controlId='formControlsText'>
								<ControlLabel className='mandatory'>First Name</ControlLabel>
								<FormControl className='mandatory' type='text' name='firstName' onChange={this.updateData} />
							</FormGroup>
							<FormGroup controlId='formControlsText'>
								<ControlLabel className='mandatory'>Last Name</ControlLabel>
								<FormControl type='text' name='lastName' onChange={this.updateData} />
							</FormGroup>
						</div>
						<div style={{display: 'flex'}}>
							<FormGroup controlId='formControlsEmail'>
								<ControlLabel className='mandatory'>Business Email </ControlLabel>
								<FormControl type='email' name='email' onChange={this.updateData} />
							</FormGroup>
							<FormGroup controlId='formControlsText'>
								<ControlLabel>Company Name </ControlLabel>
								<FormControl type='text' name='company' onChange={this.updateData} />
							</FormGroup>
						</div>
						<div style={{display: 'flex'}}>
							<FormGroup style={{width:'100%'}} controlId='formControlsTextarea'>
								<ControlLabel className='mandatory'>How can we help? </ControlLabel>
								<FormControl componentClass="textarea" name='query' onChange={this.updateData} />
							</FormGroup>
						</div>	
						<MessageDialog show={this.state.showSubmitMessage} hide={this.closeSubmitMessage.bind(this)} message={successMsg} />
						<Button className='app-btn' type="submit" onClick={this.submit.bind(this)}>SUBMIT</Button>
					</form>
			</div>
		);
	}
}

export default ContactUsForm;