/**
 * Created by jialao on 2016/6/28.
 */
import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions'

const AppBarIconMenu = ({
    handleClick,
    OPEN_ABOUT_DIALOG,
}) => {
    return (
        <AppBar
            title="知乎日报"
            titleStyle={{textAlign: 'center'}}
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

class Header extends React.Component{
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render(){
        return (
            <div>header
                <AppBarIconMenu style={{position: 'fixed'}} />
            </div>

        )
    }
}

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) =>{
    return {

    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        actions:bindActionCreators(Actions,dispatch)
    }
}

export default Header