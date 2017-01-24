import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import Root from './containers/Root'; 

const root = document.getElementById('root');
ReactDOM.render(
	<Root history={hashHistory} />,
	root
); 
