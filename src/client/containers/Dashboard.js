import React, { Component } from 'react';
import AppHeader from '../components/global/AppHeader';
import AppFooter from '../components/global/AppFooter';
import './dashboard.css';
import { form, FormGroup, FormControl, ControlLabel, Button, Checkbox, Modal, InputGroup, Glyphicon, ButtonToolbar, DropdownButton, MenuItem,  Collapse, Well} from 'react-bootstrap';

import Pie from '../components/Pie';
import Charts from '../components/BarCharts';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	search() {
		console.log("Searching...");
	}
	searchValue(args) {
		console.log(args.target.value);
	}
	render() {
		let KPI = [
			{
				name: 'Standard Reports',
				sublist: ['Cloud Service Transaction Distribution', 'Top Content Users', 'Assigned Users/Unassigned Users',  'Usage distribution accross data sources', 'No. of Transactions', 'Peak Usage Hours']
			}
		]; 				
		return(			
			<div className='dashboard'>
				<AppHeader userFullName="Admin" />
				<div className='navigation-bar'>Neo Dashboard</div>				
				<div className="app-body">
					<span className="app-body-col1">						
						<span className='content'>
							<span className='report-search'>	
								<InputGroup>
									<FormControl className='search-box' type='text' name='search' placeholder='Find reports' onChange={this.searchValue.bind(this)} />
									<InputGroup.Addon className='search-icon' onClick={this.search.bind(this)}>
										<Glyphicon glyph="search" />
									</InputGroup.Addon>															  
								</InputGroup>    
							</span>
							<span className='report-header'>
								Reports
							</span>
							<span className='report-list'>
								<span className='report-list-item'>
									{KPI.map((object, index) => <ReportListItem key={index} value={object} />)}									
								</span>
							</span>
							<span className='report-footer'>
								<Button className='app-btn' style={{width:248}}>Create your own reports </Button>
							</span>
						</span>
					
					</span>
					<span className="app-body-col2">						
						<span className='content'>
							<span>
								<ButtonToolbar className='app-dropdown'>
								  <DropdownButton title="Dashboard category" id="dropdown-size-medium">
									<MenuItem eventKey="1">Business Reports</MenuItem>
									<MenuItem eventKey="2">Operation Reports</MenuItem>								
								  </DropdownButton>
								</ButtonToolbar>
							</span>
							<span>
								<Tab title="Cloud Service Transactions Distribution" contentUrl=''/>
								<Tab title="Top Content Users" contentUrl=''/>
								<Tab title="Assigned Users/Unassigned Users" contentUrl=''/>
								<Tab title="Usage distribution accross data sources" contentUrl=''/>
								<Tab title="No. of Transactions" contentUrl=''/>
								<Tab title="Peak Usage Hours" contentUrl=''/>
							</span>							
						</span>
					</span>
					<span className="app-body-col3"></span>
				</div>
				<AppFooter />				
			</div>
		);
	}
}

export default Dashboard;

class ReportListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	changeState(args) {
		this.setState({ open: !this.state.open });		
		if(this.state.open) {
			args.target.className = "collapsed";			
		} else {
			args.target.className = "expanded";
		}
	}
	render() {
		return(
			<span>
				<span style={{display:'-webkit-box'}}><button className='collapsed' onClick={this.changeState.bind(this)}></button><span style={{paddingLeft: 5}}>{this.props.value.name}</span></span>
				<Collapse in={this.state.open}>
					<div>
						{this.props.value.sublist.map((item, index) => <SubListItem key={index} item={item}/> )}	
					</div>			
				</Collapse>
			</span>
		);
	}		
}

class SubListItem extends Component {
	render() {
		return(			
			<Well>
				<span className='sublist-item'>{this.props.item}</span>
			</Well>			
		);
	}
}

class Tab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view : 'Pie Chart'
		};
	}
	changeView(args) {
		if(args == 1) {
			this.setState({view: 'Pie Chart'});
		} else {
			this.setState({view: 'Bar Chart'});
		}
	}
	getTabContent() {
		var COLORS = ['#ef7575', '#2b3877', '#72caba', '#dc259a', '#58CF6C'];
		//call to this.props.contentUrl
		let APP_WISE_DATA = [100, 500, 200, 900, 600];
		let APP_WISE_LABEL = ['ERP App', 'User App', 'Bulk Upload', 'Imaging App', 'Other Sources'];
		let GEO_WISE_DATA = [800, 500, 500, 200, 700];
		let BU_WISE_DATA = [600, 200, 1200, 900, 800];
		
			var data=[100,300,400,500,200]
			var series= ['France', 'Italy', 'England', 'Sweden', 'Germany']
			var labels= ['cats', 'dogs', 'horses', 'ducks', 'cows']
			var colors= ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
	
		if(this.state.view === 'Pie Chart') {
			return (
				<div style={{display: 'flex'}}>
					<PieChart data = {APP_WISE_DATA} colors = {COLORS} labels = {APP_WISE_LABEL} pieTitle='Application Wise'/>
					<PieChart data = {GEO_WISE_DATA} colors = {COLORS} labels = {APP_WISE_LABEL} pieTitle='Geo Wise'/>
					<PieChart data = {BU_WISE_DATA} colors = {COLORS} labels = {APP_WISE_LABEL} pieTitle='Business Unit Wise'/>
				</div>		
			);
		} else {
			return (
			<section>
				<Charts
					data={ data }
					labels={ series }
					colors={ colors }
					height={ 250 }
				/>
			
				<Charts
					data={ data }
					labels={ series }
					colors={ colors }
					height={ 250 }
					opaque={ true }
					grouping={ 'stacked' }
				/>
				
				<Charts
					data={ data }
					labels={ series }
					colors={ colors }
					height={ 250 }
					grouping={ 'layered' }
				/>
			
				<Charts
					data={ data }
					labels={ series }
					colors={ colors }
					horizontal={ true }
				/>
			</section>
			);
		}
		
	}
	render() {		
		return(
			<div className='tab'>
				<div className='tab-header'>
					<span>{this.props.title}</span>
					<span style={{marginLeft:20, display: 'flex'}}>View:<TabViewDropDown title={this.state.view}onChange={this.changeView.bind(this)}/></span>
				</div>
				<div className='tab-body'>
					{this.getTabContent()}					
				</div>
			</div>		
		);
	}
}

class TabViewDropDown extends Component {	
	render() {
		return(
			<ButtonToolbar className='tab-view-dropdown'>
				<DropdownButton title={this.props.title} id="dropdown-size-medium" onSelect={this.props.onChange}>
					<MenuItem eventKey="1">Pie Chart</MenuItem>
					<MenuItem eventKey="2">Bar Chart</MenuItem>								
				</DropdownButton>																	
			</ButtonToolbar>
		)
	}
}


class PieChart extends Component {
	render() {
		return(
			<Pie data = {this.props.data}
				radius = {70}
				hole = {10}
				colors = {this.props.colors}
				hole = {20}
				labels = {true}
				percent = {true}
				strokeWidth = {1}
				stroke = {'#fff'}
				pieTitle = {this.props.pieTitle}
			/>
		);
	}
}