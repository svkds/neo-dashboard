import React, { Component } from 'react';
import logo from './images/neo-logo.png';
import tag_ from './images/tag-icon-1.png';
import tag__ from './images/tag-icon-2.png';
import tag___ from './images/tag-icon-3.png';

class AppTag extends Component {	
	render() {	
		let textStyle = {
			textAlign: "center",
			display: "inline-table",
			padding: 1,
			fontSize: 20,
			fontWeight: "bold"
		}
		return (
			<div>
				<div style={{paddingLeft: 60, paddingBottom:10}}>
					<img src={logo} height="200" width="160"/>
				</div>
				<div>
					<span style={textStyle}>
						<span style={{backgroundColor: "#ff6600", padding:0}}>
							REIMAGINE
						</span>
							&nbsp;CONTENT AND 
						<br />EXPAND BUSINESS POSSIBILITIES
					</span>
				</div>
				<div style={{paddingLeft: 10, paddingTop: 10}}>
					<span><img src={tag_} height="75" width="75"/></span>
					<span><img src={tag__} height="90" width="90"/></span>
					<span><img src={tag___} height="70" width="70"/></span>
				</div>
			</div>
		);
	}
}
export default AppTag;
