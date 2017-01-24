import React, { Component } from 'react';

export default class Pie extends Component {
	
	render() {
		var colors = this.props.colors,
			colorsLength = colors.length,
			radius = this.props.radius,
		    diameter = radius * 2,
			hole = this.props.hole,
			data = this.props.data,
			labels = this.props.labels,			
			self = this,
			sum = this.props.data.reduce(function (carry, current) { return carry + current }, 0),
			startAngle = 0,
			d = null;
			
		return(
			<div>
			{self.props.pieTtile}
			<svg width={diameter} height={diameter} viewBox={'0 0 ' + diameter + ' ' + diameter}>
				{data.map(
					function(slice, index){
						var angle, nextAngle, percent;
						nextAngle = startAngle;
						angle = (slice / sum) * 360;
						percent = (slice / sum) * 100;
						startAngle += angle;
						return <Slice
							key = {index}
							value = {slice}
							percent = {self.props.percent}
							percentValue = {percent.toFixed(1)}
							startAngle = {nextAngle}
							angle = {angle}
							radius = {radius}
							hole = {radius - hole}
							trueHole = {hole}
							showLabel = {labels}
							fill = {colors[index % colorsLength]}
							stroke = {self.props.stroke}
							strokeWidth = {self.props.strokeWidth}
						/>
					}
				)}
			</svg>
		</div>
		);
	}
}

function getAnglePoint(startAngle, endAngle, radius, x, y) {
	var x1, y1, x2, y2;
	x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
	y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
	x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
	y2 = y + radius * Math.sin(Math.PI * endAngle / 180);
	return { x1, y1, x2, y2 };
}

var Slice = React.createClass({
	getInitialState: function () {
		return {
			path: '',
			x: 0,
			y: 0
		};
	},
	componentWillReceiveProps: function () {
		this.setState({ path: '' });
		this.animate();
	},
	componentDidMount: function () {
		this.animate();
	},
	animate: function () {
		this.draw(0);
	},
	draw: function (s) {
		if (!this.isMounted()) {
			return;
		}
		var p = this.props, path = [], a, b, c, self = this, step;
		step = p.angle / (37.5 / 2);
		if (s + step > p.angle) {
			s = p.angle;
		}
		// Get angle points
		a = getAnglePoint(p.startAngle, p.startAngle + s, p.radius, p.radius, p.radius);
		b = getAnglePoint(p.startAngle, p.startAngle + s, p.radius - p.hole, p.radius, p.radius);
		path.push('M' + a.x1 + ',' + a.y1);
		path.push('A'+ p.radius +','+ p.radius +' 0 '+ (s > 180 ? 1 : 0) +',1 '+ a.x2 + ',' + a.y2);
		path.push('L' + b.x2 + ',' + b.y2);
		path.push('A'+ (p.radius- p.hole) +','+ (p.radius- p.hole) +' 0 '+ (s > 180 ? 1 : 0) +',0 '+ b.x1 + ',' + b.y1);
		// Close
		path.push('Z');
		this.setState({ path: path.join(' ') });
		if (s < p.angle) {
			//setTimeout(function () { self.draw(s + step) } , 16);
			self.draw(s + step);
		} else if (p.showLabel) {
			c = getAnglePoint(p.startAngle, p.startAngle + (p.angle / 2), (p.radius / 2 + p.trueHole / 2), p.radius, p.radius);
			this.setState({
				x: c.x2,
				y: c.y2
			});
		}
	},
	render: function () {
		return (
			<g overflow="hidden">
				<path
					d={ this.state.path }
					fill={ this.props.fill }
					stroke={ this.props.stroke }
					strokeWidth={ this.props.strokeWidth ? this.props.strokeWidth : 3 }
				/>
				{ this.props.showLabel && this.props.percentValue ?
					<text x={ this.state.x } y={ this.state.y } fill="#fff" textAnchor="middle">
						{ this.props.percent ? this.props.percentValue + '%' : this.props.value }
					</text>
				: null }
			</g>
		);
	}
});