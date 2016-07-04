import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainContainer from '../containers/MainContainer'
import StoryListContainer from '../containers/StoryListContainer'
import ThemesContainer from '../containers/ThemesContainer'
import DetailContainer from '../containers/DetailContainer'
import HotContainer from '../containers/HotContainer'
import HistoryContainer from '../containers/HistoryContainer'
import TodayContainer from '../containers/TodayContainer'

const route = (
	<Router history={browserHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={StoryListContainer} />
			<Route path='theme/:themeId' component={ThemesContainer} />
			<Route path='detail/:id' component={DetailContainer} />
            <Route path="today" component={TodayContainer}/>
            <Route path="history/:historyId" component={HistoryContainer}/>
            <Route path="hot" component={HotContainer}/>
		</Route>
	</Router>
)

export default route
