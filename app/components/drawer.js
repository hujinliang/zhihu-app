/**
 * Created by jialao on 2016/7/4.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleCloseToHome = this.handleCloseToHome.bind(this)
    }

    handleToggle(){
        this.props.OPEN_DRAWER()
    }

    handleClose(id) {
        this.props.CLOSE_DRAWER()
        if(id) {
            this.props.onChangeRouter(id)
        }
    }

    handleCloseToHome() {
        this.props.CLOSE_DRAWER()
        this.props.handleCloseToHome()
    }

    render() {
        // console.log('------------------')
        // console.log(this.props.list)
        const themesList = this.props.list.map(item => {
            return (
                <MenuItem key={item.id} onTouchTap={this.handleClose.bind(null, item.id)}>{item.name}</MenuItem>
            )
        })

        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.open}
                    onRequestChange={() => this.handleClose()}
                >
                    <MenuItem onTouchTap={this.handleCloseToHome}>首页</MenuItem>
                    {themesList}
                </Drawer>
            </div>
        );
    }
}