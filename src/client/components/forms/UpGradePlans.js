import React, { Component } from 'react';
import { form, FormGroup, FormControl, ControlLabel, HelpBlock, Modal, Button } from 'react-bootstrap';
import _ from 'lodash';
import ReactDOM from 'react-dom';


class UpGradePlanForm extends Component {
	upGradePlans(_args) {
		_args.preventDefault();
		console.log(_args);
	}
	render() {
		return(
			<form action='/' onSubmit={this.upGradePlans.bind(this)} method='POST'>
				<FormGroup controlId='formControlsSelect'>
					<ControlLabel>Select the Neo Package you want</ControlLabel>
					<FormControl componentClass="select" name='bu' onChange={this.update} >
						<option value="option1">Basic</option>
						<option value="option2">Enhanced</option>
                        <option value="option2">Premium</option>
					</FormControl>
                    <ControlLabel>Choose the Add-ons you want</ControlLabel>
					<FormControl componentClass="select" name='bu' onChange={this.update} >
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
					</FormControl>
                    <ControlLabel>Choose the App available to you</ControlLabel>
					<FormControl componentClass="select" name='bu' onChange={this.update} >
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
					</FormControl>
				</FormGroup>
				<div className='form-footer'>
					<Button className='app-btn' style={{backgroundColor: "#f79649",color:"white",fontWeight:"bold"}}type="submit" onClick={this.props.onSuccess}>Submit</Button>
				</div>				
			</form>
		);
	}
}

class UpGradePlans extends Component {
	constructor(props) {
		super(props);
		
	}	
    		
	render() {
		return(
			<div className='modal-container'>			
				<Modal className='_form upgradePlan-form' show={this.props.show} onHide={this.props.hide} container={this.props.container} >				  
					<Modal.Header closeButton> 
					<Modal.Title>Upgrade Your Plan</Modal.Title>
					</Modal.Header>
					<Modal.Body>
                        <UpGradePlanForm onSuccess={this.props.showSuccessModal}/>
					</Modal.Body>
				</Modal>
			</div>			
		);
	}
}    

export default UpGradePlans;