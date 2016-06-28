/**
 * Created by jialao on 2016/6/28.
 */
import React,{Component} from 'react'
import Header from '../components/header'
import H2 from '../components/H2'


export default class Main extends Component{
    
    render(){
        var {children} = this.props;
        return (
            <div>
                <Header />
                <H2 />
                {children}
            </div>
        )
    }
    
}