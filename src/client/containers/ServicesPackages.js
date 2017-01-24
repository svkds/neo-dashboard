import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import AppHeader from '../components/global/AppHeader';
import AppFooter from '../components/global/AppFooter';
import ServiceTile from './ServiceTile.js';
import ActivePlans from './ActivePlans';
import basic from './theme/images/basic.png';
import enhanced from './theme/images/enhanced.png';
import primium from './theme/images/primium.png'

class ServicesPackages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'neo'
    }
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(tab) {
    this.setState({ activeTab: tab });
  }
	handlePageChange() {
    console.log(`active page is `);
    this.setState({activePage: 3});
  }
	render() {
    console.log(this.state.activeTab);
		return(			
		   <div className = "servicePackages">
			  <AppHeader userFullName="Admin" />
                <div className='navigation-bar'>Services >> Neo Content Suits</div>
			      <div className="app-body" >
				    <div className = "leftPane">
                       <ul style = {{paddingLeft: "10px"}}>
						<li className ="liTag" onClick={(event) => this.onTabChange('neo')}><a className ="aTag" >Neo Standard Packages</a></li>
						<li className ="liTag" onClick={(event) => this.onTabChange('plan')}><a className ="aTag" >MyActive Plans</a></li>
						<li className ="liTag"onClick={(event) => this.onTabChange('services')}><a className ="aTag" >MyActive Services</a></li>
					   </ul>
					</div>
				  <div className = "rightPane" style={{width:"80%"}}>
                {this.state.activeTab === 'neo' ? 
				    <div className="servicesTiles">
					 <div className ="childElements">
					   <h3 className ="customHeaders">Neo Model Standard Packages</h3>
						<table className = "packagesPlans">
							<tbody>
								<tr>
									<th className="packagesPlansTh">Parameter</th>
									<th  className="packagesPlansTh"><ServiceTile icon={basic} name={"Basic"} description={""} /></th> 
									<th  className="packagesPlansTh"><ServiceTile icon={enhanced} name={"Enhanced"} description={""}/></th>
									<th  className="packagesPlansTh"><ServiceTile icon={primium} name={"Premium"} description={""} /></th>
								</tr>
								<tr>
									<td className="packagesTdParameter">Users (Named)</td>
									<td className="packagesTd">Upto 3,000 with 5% concurrency</td>
									<td className="packagesTd">Upto 5,000 (5% concurrency)</td>
									<td className="packagesTd">Upto 10,000 (5% concurrency)</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">Storage</td>
									<td className="packagesTdWhite">5 TB</td> 
									<td className="packagesTdWhite">20 TB</td>
									<td className="packagesTdWhite">50 TB</td>
								</tr>
								<tr >
									<td className="packagesTdParameter">Number Of Documents managed</td>
									<td className="packagesTd">Up to 10 Mn</td> 
									<td className="packagesTd">10 Mn to 25 Mn</td>
									<td className="packagesTd">25 Mn to 40 Mn</td>
								</tr>
								<tr >
									<td className="packagesTdParameter">Support Window</td>
									<td className="packagesTdWhite">8 X 5 </td> 
									<td className="packagesTdWhite">24 X 5 </td>
									<td className="packagesTdWhite">24 X 7 </td>
								</tr>
								<tr >
									<td className="packagesTdParameter">Supported Language</td>
									<td className="packagesTd">English</td> 
									<td className="packagesTd">English</td>
									<td className="packagesTd">English</td>
								</tr>
								<tr >
									<td className="packagesTdParameter">Timezone</td>
									<td className="packagesTdWhite">1</td> 
									<td className="packagesTdWhite">All</td>
									<td className="packagesTdWhite">All</td>
								</tr>
								<tr >
									<td className="packagesTdParameter">Onsite Support (Local)</td>
									<td className="packagesTd">-</td> 
									<td className="packagesTd">-</td>
									<td className="packagesTd">Available (Optional)</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">On Call Support</td>
									<td className="packagesTdWhite">-</td> 
									<td className="packagesTdWhite">Included</td>
									<td className="packagesTdWhite">Included</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">Count of Environment Set (Prod, UAT, QA, Dev)</td>
									<td className="packagesTd">1</td> 
									<td className="packagesTd">1</td>
									<td className="packagesTd">2</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">Service Request Included (per month)</td>
									<td className="packagesTdWhite">30</td> 
									<td className="packagesTdWhite">50</td>
									<td className="packagesTdWhite">70</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">Coordination With Product Vendor</td>
									<td className="packagesTd">Included</td> 
									<td className="packagesTd">Included</td>
									<td className="packagesTd">Included</td>
								</tr>
                <tr>
									<td className="packagesTdParameter">ECM Application (OOTB)</td>
									<td className="packagesTdWhite">1</td> 
									<td className="packagesTdWhite">Up to 3</td>
									<td className="packagesTdWhite">Up to 5</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">Applications Integration Supported</td>
									<td className="packagesTd">Up to 2</td> 
									<td className="packagesTd">Up to 4</td>
									<td className="packagesTd">Up to 5</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">Application Size (As per Service Catalog)</td>
									<td className="packagesTdWhite">Size – Extra Small OR Small</td> 
									<td className="packagesTdWhite">+ Up to 1 Medium</td>
									<td className="packagesTdWhite">+ Up to 1 Large</td>
								</tr>
								<tr>
									<td className="packagesTdParameter">HApps</td>
									<td className="packagesTd">HApps (Basic)</td> 
									<td className="packagesTd">HApps (Enhanced)</td>
									<td className="packagesTd">HApps (Premium)</td>
								</tr>
							  </tbody>
							</table>
						  </div>
						  <div className = "addOns">
							 <h3 className ="customHeaders">Add Ons</h3>
							  <table className ="addOnsTable">
								<tbody>
									<tr>
										<th className="packagesPlansTh">Parameter</th>
										<th className="packagesPlansTh">Basic</th>
										<th className="packagesPlansTh">Enhanced</th>
										<th className="packagesPlansTh">Premium</th>
									</tr>
									<tr>
									  <td className="packagesTdParameter">Pages</td>
										<td className="packagesTd">Up To 1 Mn per Year</td> 
										<td className="packagesTd">Up To 1.5 Mn per Year</td>
										<td className="packagesTd">Up To 10 Mn per Year</td>
									</tr>
                    
								</tbody>
							</table>
						</div>
						
					</div> : null}
                 {this.state.activeTab === 'plan' ? 
				 <div style = {{paddingTop: "20px"}}>
                   <span className = "customHeaders"style = {{fontSize:"24px",paddingLeft:"470px"}}>Active Plans</span>
                     <ActivePlans />
										 <div>
										 <Pagination 
										 activePage={2} 
										 itemsCountPerPage={10} 
										 totalItemsCount={10} 
										 onChange={this.handlePageChange}/>
										 </div>
			    </div>: null}
					 {this.state.activeTab === 'services' ? 
				 <div className = "child">
							<h3 className ="customHeaders">Neo Applications</h3>
							  <table className = "applicationsPlans">
				                <tbody>
								 <tr>
									<th className="packagesPlansTh" style ={{paddingLeft:"70px"}}><ServiceTile icon={basic} name={"Basic"} description={""} /></th> 
									<th className="packagesPlansTh" style = {{paddingLeft:"70px"}}><ServiceTile icon={enhanced} name={"Enhanced"} description={""}/></th>
									<th className="packagesPlansTh" style = {{paddingLeft:"70px"}}><ServiceTile icon={primium} name={"Premium"} description={""} /></th>
								 </tr>
								 <tr>
									<td className="packagesTd">Dashboard</td>
									<td className="packagesTd">Dashboard</td>
									<td className="packagesTd">Dashboard</td>
								 </tr>
								 <tr>
									<td className="packagesTd">Integration Framework Built-In</td> 
									<td className="packagesTd">Integration Framework Built-In</td>
									<td className="packagesTd">Integration Framework Built-In</td>
								 </tr>
								 <tr>
									<td className="packagesTd"></td>
									<td className="packagesTd">DevOps</td>
									<td className="packagesTd">DevOps</td>
								 </tr>
								 <tr>
									<td className="packagesTd"></td> 
									<td className="packagesTd">HA for Production</td>
									<td className="packagesTd">SDK</td>
								 </tr>
								 <tr>
									<td className="packagesTd"></td> 
									<td className="packagesTd"></td>
									<td className="packagesTd">HA for Production</td>
								 </tr>
								 <tr >
								    <td className="packagesTd"></td> 
									<td className="packagesTd"></td>
									<td className="packagesTd">Capacity Planning Dashboard</td>
								 </tr>
								 <tr >
									<td className="packagesTd"></td> 
									<td className="packagesTd"></td>
									<td className="packagesTd">Object Model Templates</td>
								 </tr>
								 <tr >
									<td className="packagesTd"></td> 
									<td className="packagesTd"></td>
									<td className="packagesTd">Patch Automation</td>
								 </tr>
								 <tr>
									<td className="packagesTd"></td> 
									<td className="packagesTd"></td>
									<td className="packagesTd">Connectors</td>
								 </tr>
								 <tr>
									<td className="packagesTd"></td>
									<td className="packagesTd"></td>
									<td className="packagesTd">Bulk Upload Tool</td>
								  </tr>
								  <tr>
									<td className="packagesTd"></td> 
									<td className="packagesTd"></td>
									<td className="packagesTd">Upgrades Components</td>
								  </tr>
								  <tr>
									<td className="packagesTd"></td>
									<td className="packagesTd"></td>
									<td className="packagesTd">Migration Connector</td>
								  </tr>
								  <tr >
									<td className="packagesTd"></td> 
									<td className="packagesTd"></td>
									<td className="packagesTd">DR Test</td>
								  </tr>
								  <tr >
									<td className="packagesTd"></td>
									<td className="packagesTd"></td>
									<td className="packagesTd">Infra - Command Centre</td>
								  </tr>
								</tbody>
							 </table>
				        </div>: null}
               </div>
			 </div>
			<AppFooter />				
		  </div>
		);
	}
}

export default ServicesPackages;