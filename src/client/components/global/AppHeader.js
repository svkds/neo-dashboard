import React, { Component } from 'react';

class AppHeader extends Component {	
	constructor() {
		super();
		let url = window.location.href;
		let path = url.substr(0, url.indexOf(window.location.hash));
		this.homeUrl = path + "#/";
		this.servicesUrl= "#services";
		this.contactUsLocation = path + "#/contactus/";
		this.faqLocation = path + "#/faqs/";
	}
	render() {			
		return (
			<div className="app-header">
				<span className="app-header-col1"></span>
				<span className="app-header-col2">  			
					<a href={this.homeUrl}>About Neo</a>
					<a href={this.servicesUrl}>Services</a>
					<a href={this.contactUsLocation}>Contact Us</a>
					<a>FAQ</a>					
				 </span>		
				<span className="app-header-col3">
					<span style={{color: '#f79649'}}>Welcome user</span>
					<br />
					<span><a>Logout</a></span>
				</span>
			</div>
		);
	}
}
export default AppHeader;