import React, { Component } from 'react';
import {Modal, Button } from 'react-bootstrap';

class UpGradePlanSuccess extends Component {

render() {
    return(
			<div className='modal-container'>			
				<Modal shouldCloseOnOverlayClick={false} className='upgradePlan-success' show={this.props.show} onHide={this.props.hide} >				  
					<Modal.Header closeButton> 
					</Modal.Header>
					<Modal.Body>
                   <p>Thanks we have received your Request. our consultant will get back to you on this shortly.</p>
                   </Modal.Body>
				</Modal>
			</div>			
		);
}
}
export default UpGradePlanSuccess ;