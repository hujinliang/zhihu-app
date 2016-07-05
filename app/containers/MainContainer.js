import React from 'react'
import Header from '../components/header'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple100, purple500, purple700} from 'material-ui/styles/colors';



export default class MainContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
	}
    
	render() {
		return (
			<div>
				<Header />

				{this.props.children}
			</div>
		)
	}
}