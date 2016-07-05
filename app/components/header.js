import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/DarkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple100, purple500, purple700} from 'material-ui/styles/colors';


import AboutDialog from './aboutDialog'
import Drawer from './drawer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/'

const AppBarIconMenu = ({
	handleClick,
	OPEN_ABOUT_DIALOG,
}) => {
  	return (
	  <AppBar
	    title="知乎"
	    titleStyle={{textAlign: 'left'}}
	    style={{position: 'fixed'}}
	    iconElementLeft={
	    	<IconButton onClick={handleClick}><ExpandMoreIcon /></IconButton>
	    }
	    iconElementRight={
	      <IconMenu
	        iconButtonElement={
	          <IconButton><MoreVertIcon /></IconButton>
	        }
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
	        <MenuItem primaryText="About" onTouchTap={OPEN_ABOUT_DIALOG} />
	      </IconMenu>
	    }/>
	)
}

class Header extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.handleClickBtn = this.handleClickBtn.bind(this)
		this.handleChangeThemes = this.handleChangeThemes.bind(this)
		this.handleCloseToHome = this.handleCloseToHome.bind(this)
        this.handleCloseToHot = this.handleCloseToHot.bind(this)
	}
	componentDidMount() {
		this.props.actions.LOAD_THEMES_LIST_DATA()
	}
	getChildContext() {
        return { muiTheme: getMuiTheme({
            palette: {
                primary1Color: purple500,
                primary2Color: purple700,
                primary3Color: purple100,
            }}) };
    }
	handleClickBtn() {
		this.props.actions.OPEN_DRAWER()
	}
	handleChangeThemes(id) {
		this.context.router.push(`/theme/${id}`)
	}
	handleCloseToHome() {
		this.context.router.push(`/`)
	}
    handleCloseToHot(){
        this.context.router.push('/hot')
    }
	render() {
		return (
			<header>
				<AppBarIconMenu
					style={{position: 'fixed'}}
					handleClick={this.handleClickBtn}
					{...this.props.actions}
				/>

				<AboutDialog
					open={this.props.UIState.isDialogOpen}
					{...this.props.actions}
				/>

				<Drawer
					open={this.props.UIState.isDrawerOpen}
					{...this.props.actions}
					list={this.props.themesList}
					onChangeRouter={this.handleChangeThemes}
					handleCloseToHome={this.handleCloseToHome}
                    handleCloseToHot={this.handleCloseToHot}
				/>
			</header>
		)
	}
}

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		UIState: state.UIState,
		themesList: state.themesList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
