import React, { Component } from 'react';
import AppHeader from '../components/global/AppHeader';
import AppFooter from '../components/global/AppFooter';
import './theme/css/bootstrap.css';
import './theme/css/App.css';
import Tile from './Tile.js';
import dashboard from './theme/images/NeoDashboard.png';
import application from './theme/images/NeoApplication.png';
import supportServices from './theme/images/Support Services.png';
import NeoContentSuit from './theme/images/neo-content-suits.png'

class Home extends Component {
	render() {
		return(
			<div className="Dashboard">			
				<AppHeader userFullName="Admin" />
				<div style={{height:"800px"}}>
				<div style={{height:"400px",backgroundColor:"#c6d9f1"}}>
					<div className="NeoImage col-md-6 col-sm-5 hidden-on-xs">
						<div className="dashboardImage" />
					</div>
					<div className="NeoDescription col-md-offset-1 col-md-5 col-sm-offset-1 col-sm-6 col-xs-12">
						<h1 className="gap-south-small strong" style={{marginTop: 0, color: '#f79649'}}>Neo Overview</h1>
						<p>HCL Neo is fully managed next generation content solution that enables centralized and robust document management as a service model. We provide comprehensive services supporting effective chargeback to business for ECM content management application.</p>
						<button className="watchVideo">Watch the video</button>
					</div>
				</div>
				<h1 style={{paddingLeft:"3%"}} id="services">Services</h1>
				<div className="DashboardTiles" style={{paddingLeft:"20px",width:"100%"}}>
					<Tile icon={application} name={"Neo Application"} description={"Out Of Box preconfigured horizontal & vertical applications"} />
					<Tile icon={dashboard} name={"Neo Dashboard"} description={"Trends on service consumption and support"} />
					<Tile icon={supportServices} name={"Support Services"} description={"IT support service required for Neo"} />
					<Tile icon={NeoContentSuit} name={"Neo Content Suits"} description={"Neo Standard Packages for customer to subscribe"} />
				</div>
			</div>
				<AppFooter />				
			</div>
		);
	}
}

export default Home;
