/**
 * Created by jialao on 2016/6/28.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import route from './config/route.js'
import {Provider} from 'react-redux'
import store from './config/store'

ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>,document.querySelector('#app')
)
