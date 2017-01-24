import React, { Component } from 'react';

class ServiceTile extends Component {	
	render() {
	  
		return (
			<div className="Tile" style={{fontWeight:20,height:"60px",display: "table-row"}}>
				<div style={{width : "auto", height:"60px", paddingLeft:"60px", textAlign:"center", fontSize:20}}>
				<img src={this.props.icon} alt={this.props.name} style={{width:"40px",height:"60px",alignContent:"center"}} />
				<b style={{paddingLeft: "5px"}}>{this.props.name}</b>
				</div>
			</div>
		);
	}
}

export default ServiceTile;
