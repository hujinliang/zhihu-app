/**
 * Created by lenovo on 2016/7/5.
 */
import React from 'react'
import Header from '../components/header'
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple100, purple500, purple700} from 'material-ui/styles/colors';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'


const styles = {
    container: {
        maxWidth: '640px',
        margin: '0 auto',
        paddingTop: '64px',


    },
    logoContainer:{
        marginTop:'64px',
        textAlign:'center',
        marginBottom:'100px'
    },
    button:{
        marginLeft:'12px'
    },
    buttonContainer:{
        textAlign:'center'
    }
}



class HomeContainer extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.handleToToday = this.handleToToday.bind(this)
    }
    getChildContext() {
        return { muiTheme: getMuiTheme({
            palette: {
                primary1Color: purple500,
                primary2Color: purple700,
                primary3Color: purple100,
            }}) };
    }
    handleToToday() {
        this.context.router.push(`/today`)
    }
    

    render() {
        return (
            <div style={styles.container}>
                <div class='logon-container' style={styles.logoContainer}>
                    <a href="javascript:">
                        <img src="../assets/知乎.png" alt=""/>
                    </a>
                </div>
                <div className="buttonContainer" style={styles.buttonContainer}>
                    <RaisedButton label="今日速查" primary={true} style={styles.button} onTouchTap={this.handleToToday} />
                    <RaisedButton label="历史文章" primary={true} style={styles.button} />
                </div>
            </div>
        )
    }
}

HomeContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

HomeContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = ( state ) => {
    return {
        mainList: state.mainList,
        UIState: state.UIState
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)

