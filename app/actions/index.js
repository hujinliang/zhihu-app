import { getLatestStory, getHistoryStory, getDetail, getThemesList, getTheme,getHot } from '../helpers/api'

export const GET_LATEST_DATA = () => {
	return ( dispatch, getStore ) => {
		if(getStore().today.length > 0) {
			return;
		}
		getLatestStory().then(data => {
			dispatch(GET_TODAY(data))
		})
	}
}




export const GET_HISTORY_DATA = (date) => {
	return (dispatch, getStore) => {
		getHistoryStory(date).then(data => {
			dispatch(GET_HISTORY(data))
		})
	}
}

export const GET_HOT_DATA = ()=>{
    return (dispatch,getStore)=>{
        getHot().then(data=>{
            dispatch(GET_HOT(data));
        })
    }
}

export const LOAD_THEMES_LIST_DATA = () => {
	return (dispatch, getStore) => {
        console.log('load-them')
		if(getStore().themesList.length > 0) {
			return;
		}
		getThemesList().then(data => {
            console.log(data)
			dispatch(LOAD_THEMES_LIST(data.data.others))
		})
	}
}

export const GET_DETAIL_DATA = (id) => {
	return (dispatch => {
		getDetail(id).then(data => {
			dispatch(GET_DETAIL(data))
		})
	})
}

export const GET_THEME_DATA = (id) => {
	return (dispatch => {
		getTheme(id).then(data => {
			dispatch(GET_THEME(data.data))
		})
	})
}

export const GET_LATEST = (data) => {
	return {
		type: 'GET_LATEST',
		data
	}
}

export const GET_HISTORY = (data) => {
	return {
		type: 'GET_HISTORY',
		data
	}
}

export const GET_DETAIL = (data) => {
	return {
		type: 'GET_DETAIL',
		data
	}
}

export const EMPTY_DETAIL = () => {
	return {
		type: 'EMPTY_DETAIL'
	}
}

export const START_LOADING = () => {
	return {
		type: 'START_LOADING'
	}
}

export const STOP_LOADING = () => {
	return {
		type: 'STOP_LOADING'
	}
}

export const DECREMENT_DATE = () => {
	return {
		type: 'DECREMENT_DATE'
	}
}

export const OPEN_ABOUT_DIALOG = () => {
	return {
		type: 'OPEN_ABOUT_DIALOG'
	}
}

export const CLOSE_ABOUT_DIALOG = () => {
	return {
		type: 'CLOSE_ABOUT_DIALOG'
	}
}

export const OPEN_DRAWER = () => {
	return {
		type: 'OPEN_DRAWER'
	}
}

export const CLOSE_DRAWER = () => {
	return {
		type: 'CLOSE_DRAWER'
	}
}

export const LOAD_THEMES_LIST = (list) => {
	return {
		type: 'LOAD_THEMES_LIST',
		list
	}
}

export const GET_THEME = (theme) => {
	return {
		type: 'GET_THEME',
		theme
	}
}
export const GET_TODAY=(data)=>{
    return {
        type:'GET_TODAY',
        data
    }
}
export const GET_HOT=(data)=>{
    return{
        type:'GET_HOT',
        data
    }
}