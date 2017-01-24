import React, { Component } from 'react';
import AppHeader from '../components/global/AppHeader';
import AppFooter from '../components/global/AppFooter';
import ContactUsForm from '../components/forms/ContactUsForm';

class ContactUs extends Component {
	render() {
		return(			
			<div>
				<AppHeader userFullName="Admin" />
				<div className='navigation-bar'>Contact Us</div>				
				<div className="app-body">
					<span className="app-body-col1">
						<span className='content'>
							<h3><b>Our Address</b></h3>
							<p >
								HCL Technologies Ltd.
								Technology Hub, SEZ
								Plot No. 3A, Sector 126
								Noida – 201304, India
							</p>
						</span>
					</span>
					<span className="app-body-col2">						
						<span className='content'>
							<h3><b>Get in touch with us</b></h3>
							<ContactUsForm />
							<div><span style={{color:'Red', fontWeight:'bold', fontSize: 'smaller'}}>* </span> <span style={{fontSize:14}}>Mandatory fields</span></div>
							<h4><b>Need technical assistance? <a style={{fontSize: 18}}>Tap in on support services</a></b></h4>							
						</span>
					</span>
					<span className="app-body-col3"></span>
				</div>
				<AppFooter />				
			</div>
		);
	}
}

export default ContactUs;
