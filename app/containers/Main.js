/**
 * Created by jialao on 2016/6/28.
 */
import React,{Component} from 'react'

export default class Main extends Component{
    
    render(){
        var {children} = this.props;
        return (
            <div>
                HelloWorld
                {children}
            </div>
        )
    }
    
}