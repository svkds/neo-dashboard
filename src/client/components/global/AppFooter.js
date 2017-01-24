import React from 'react';

class Footer extends React.Component {
	render() {
		const copyright = "Copyright © 2017 HCL Technologies Limited | www.hcltech.com";
		return (
			<div className='app-footer navbar-fixed-bottom'>
				{copyright}
			</div>
		);
	}
}
export default Footer;