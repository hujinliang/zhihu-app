/**
 * Created by jialao on 2016/6/28.
 */
import React from 'react'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import Main from '../containers/Main'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import History from '../containers/History'
import Hot from '../containers/Hot'
import Themes from '../containers/Themes'
import Today from '../containers/Today'

const route = (
    <Router history={browserHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="theme/:themeId" component={Themes}/>
            <Route path="detail/:detailId" component={Detail}/>
            <Route path="today" component={Today}/>
            <Route path="history/:historyId" component={History}/>
            <Route path="hot" component={Hot}/>
        </Route>
    </Router>
)

export default route