/**
 * Created by jialao on 2016/6/28.
 */
import React,{Component} from 'react'
import Header from '../components/header'



export default class Main extends Component{

    constructor(props, context) {
        super(props, context)
    }
    
    render(){
        var {children} = this.props;
        return (
            <div>
                <Header />
                {children}
            </div>
        )
    }
    
}