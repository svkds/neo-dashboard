import React, { Component } from 'react';

class Tile extends Component {	
	render() {
	  
		return (
			<div className="Tile" style={{fontWeight:100}}>
				<div style={{width : "auto", height:"60px", padding:"20px", textAlign:"center", color : "#167dc7", fontSize:25}}><b>{this.props.name}</b></div>
				<div style={{width:"auto"}}>
					<img src={this.props.icon} alt={this.props.name} style={{width:"80px",height:"80px"}} />
				</div>
				<div style={{width : "auto", height:"60px", padding:"20px", textAlign:"center", color : "black"}}>{this.props.description}</div>
			</div>
		);
	}
}

export default Tile;
