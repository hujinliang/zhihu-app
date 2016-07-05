import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'

export default class DrawerContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleCloseToHome = this.handleCloseToHome.bind(this)
        this.handleCloseToHot = this.handleCloseToHot.bind(this)
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
    handleCloseToHot(){
        this.props.CLOSE_DRAWER()
        this.props.handleCloseToHot()
    }

    render() {
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
                    <AppBar title="菜单" />
                    <MenuItem onTouchTap={this.handleCloseToHome}>首页</MenuItem>
                    <MenuItem onTouchTap={this.handleCloseToHot}>热门</MenuItem>
                    {themesList}
                </Drawer>
            </div>
        );
    }
}