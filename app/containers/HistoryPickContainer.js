/**
 * Created by jialao on 2016/7/5.
 */
/**
 * Created by jialao on 2016/7/4.
 */

import React from 'react'
import { propTypes } from 'react'
import { getLatestStory, getHistoryStory } from '../helpers/api'
import { parseDate } from '../helpers/utils'
import ListItem from '../components/listItem'
import moment from 'moment'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple100, purple500, purple700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

const styles = {
    container: {
        maxWidth: '640px',
        margin: '0 auto',
        paddingTop: '128px',
        textAlign:'center'
    },
    button:{
        marginTop:'40px'
    }
}

class HistoryPickContainer extends React.Component {
    constructor(props, context) {
        super(props, context)
        var now = new Date();
        this.state={
            Date:now
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleToHistoryPage = this.handleToHistoryPage.bind(this)

    }
    getChildContext() {
        return { muiTheme: getMuiTheme({
            palette: {
                primary1Color: purple500,
                primary2Color: purple700,
                primary3Color: purple100,
            }}) };
    }
    handleClick(id) {

    }
    handleChange(event, date)  {
        console.log(date)
        this.setState({
            Date: date,
        });
    }
    handleToHistoryPage(){
        // console.log(this.state.Date)
        var queryString=parseDate(this.state.Date)
        // console.log(queryString)
        this.context.router.push('/history/' + queryString)
    }
    render() {
        return (
            <div style={styles.container}>
                <h2>请选择时间</h2>
                <DatePicker   hintText="Controlled Date Input"
                            value={this.state.Date}
                            onChange={this.handleChange} />
                <RaisedButton label="确定" primary={true} style={styles.button} onTouchTap={this.handleToHistoryPage} />
            </div>
        )
    }
}

HistoryPickContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

HistoryPickContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = ( state ) => {
    return {
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
)(HistoryPickContainer)



