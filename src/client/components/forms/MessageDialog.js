import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class MessageDialog extends Component {
	render() {
		return(
			<div className="modal-container">			
				<Modal className='_form modal-form wide-modal-form' show={this.props.show} onHide={this.props.hide} container={this} >				  
					<Modal.Header closeButton>
						<Modal.Title>Message</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<p> {this.props.message} </p>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button className='app-btn' style={{float:'none !important'}} onClick={this.props.hide}>CLOSE</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
export default MessageDialog;