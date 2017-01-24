import React, { Component } from 'react';
import AppHeader from '../components/global/AppHeader';
import AppFooter from '../components/global/AppFooter';
import ServiceTile from './ServiceTile.js';
import basic from './theme/images/basic.png';
import enhanced from './theme/images/enhanced.png';
import primium from './theme/images/primium.png'

class Services extends Component {
	render() {
		return(			
		   <div>
			  <AppHeader userFullName="Admin" />
              <div className='navigation-bar'>Neo Model Standard Packages</div>
			  <div className="app-body" style={{height:"600px"}}>
				<div id = "leftPane"style={{float:"left",backgroundColor:"#4b5658",height:"400px"}}>
                  <ul>
                    <li style = {{listStyle : "none !importent",height :"40px"}}><a>Neo Standard Packages</a></li>
                    <li style = {{listStyle: "none !importent"}}><a>MyActive Plans</a></li>
                  </ul>
                </div>
                <div id = "rightPane"style={{}}>
                 <div className="ServicesTiles" style={{display : "inline-flex",width:"980px",height:"400px"}}>
				<table style={{width:"100%",border: "1px solid #E4E4E4",textAlign: "center"}}>
				 <tbody>
                 <tr style={{border: "1px"}}>
                    <th style={{border: "1px solid #E4E4E4",backgroundColor: "#d4d2d2",
    textAlign: "-webkit-center"}}><ServiceTile icon={basic} name={"Basic"} description={""} /></th> 
                    <th style={{border: "1px solid #E4E4E4",backgroundColor: "#d4d2d2",
    textAlign: "-webkit-center"}}><ServiceTile icon={enhanced} name={"Enhanced"} description={""}/></th>
                    <th style={{border: "1px solid #E4E4E4",backgroundColor: "#d4d2d2",
    textAlign: "-webkit-center"}}><ServiceTile icon={primium} name={"Premium"} description={""} /></th>
					 </tr>
                    <tr style={{border: "1px solid #E4E4E4"}}>
                    <td style={{border: "1px solid #E4E4E4"}}>Jill</td>
                    <td style={{border: "1px solid #E4E4E4"}}>50</td>
                    <td style={{border: "1px solid #E4E4E4"}}>50</td>
                    </tr>
                    <tr style={{border: "1px solid #E4E4E4"}}>
                    <td style={{border: "1px solid #E4E4E4"}}>Jackson</td> 
                    <td style={{border: "1px solid #E4E4E4"}}>94</td>
                    <td style={{border: "1px solid #E4E4E4"}}>50</td>
                  </tr>
				  </tbody>
                 </table>
				 </div>
                 <div className = "addOns">
				 <h3 style = {{textAlign:"center"}}>Add Ons</h3>
                 <table style={{width:"100%",border: "1px solid #E4E4E4"}}>
				 <tbody>
                 <tr>
                   <th>Prperties</th>
                    <th>Basic</th> 
                    <th>Enhanced</th>
                    <th>Primium</th>
                    </tr>
                    <tr>
                    <td style={{border: "1px"}}>Jill</td>
                    <td>Smith</td> 
                    <td>50</td>
                    <td>50</td>
                    </tr>
                    <tr>
                    <td>Eve</td>
                    <td>Jackson</td> 
                    <td>94</td>
                    <td>50</td>
                  </tr>
				  </tbody>
                 </table>
                 </div>
                </div>
			 </div>
			 <AppFooter />				
		  </div>
		);
	}
}

export default Services;