/**
 * Created by jialao on 2016/6/28.
 */
import React from 'react'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import Main from '../containers/Main'
import Home from '../containers/Home'

const route = (
    <Router history={browserHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

export default route