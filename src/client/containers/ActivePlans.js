import React, { Component } from 'react';
import UpGradePlans from '../components/forms/UpGradePlans';
import UpGradePlanSuccess from '../components/forms/UpGradePlanSuccess';
import { form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class ActivePlans extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showUpGradePlans: false,
			showSuccessModal: false
		};
	}  
	showSuccessModal(){
		this.setState({ showSuccessModal: true});
		this.setState({ showUpGradePlans: false});
	}
	showUpGradePlans() {
		this.setState({ showUpGradePlans: true});
		this.setState({ showSuccessModal: false});
	}
	closeModals() {
		this.setState({ showUpGradePlans: false});
		this.setState({ showSuccessModal: false});
	}
	render() {
		return (
			<div className = " ">
					<table className = "packagesPlans">
							<tbody>
								<tr>
									<th className="plansTh">Parameter</th>
									<th  className="plansTh">Basic</th> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Users (Named)</td>
									<td className="packagesTd">Upto 3,000 with 5% concurrency</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">Storage</td>
									<td className="packagesTd">5 TB</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Number Of Documents managed</td>
									<td className="packagesTd">Up to 10 Mn</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Support Window</td>
									<td className="packagesTd">8 X 5 </td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Supported Language</td>
									<td className="packagesTd">English</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Timezone</td>
									<td className="packagesTd">1</td> 
								</tr>
								<tr >
									<td className="packagesTdParameter">Onsite Support (Local)</td>
									<td className="packagesTd">-</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">On Call Support</td>
									<td className="packagesTd">-</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Count of Environment Set (Prod, UAT, QA, Dev)</td>
									<td className="packagesTd">1</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Service Request Included (per month)</td>
									<td className="packagesTd">30</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Coordination With Product Vendor</td>
									<td className="packagesTd">Included</td> 
								</tr>
                                <tr>
									<td className="packagesTdParameter">ECM Application (OOTB)</td>
									<td className="packagesTd">1</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Applications Integration Supported</td>
									<td className="packagesTd">Up to 2</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">Application Size (As per Service Catalog)</td>
									<td className="packagesTd">Size – Extra Small OR Small</td> 
								</tr>
								<tr>
									<td className="packagesTdParameter">HApps</td>
									<td className="packagesTd">HApps (Basic)</td> 
								</tr>
							  </tbody>
							</table>
							<div className = "addOns">
							 <h3 className ="customHeaders">Add Ons</h3>
							  <table className ="addOnsTable">
								<tbody>
									<tr>
										<th className="plansTh">Parameter</th>
										<th className="plansTh">Basic</th>
									</tr>
									<tr>
									    <td className="packagesTdParameter">Pages</td>
										<td className="packagesTd">Up To 1 Mn per Year</td> 
									</tr>
						       </tbody>
							</table>
						</div>
					<UpGradePlans show={this.state.showUpGradePlans} hide={this.closeModals.bind(this)} showSuccessModal={this.showSuccessModal.bind(this)} />
					<UpGradePlanSuccess show={this.state.showSuccessModal} hide={this.closeModals.bind(this)}/>
					<Button className='app-btn' type="submit" style={{marginLeft: "430px",width:"20%",fontWeight:"bold"}} onClick={this.showUpGradePlans.bind(this)}>Upgrade Your Plan</Button>
			</div>
		);
	}
}

export default ActivePlans;