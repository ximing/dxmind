/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import React, {Component} from "react";
import DXMind from '../src/index';

export default class DemoContainer extends Component{
    componentDidMount(){
        let dom = document.getElementById('appContainer');
        let dxMind = new DXMind(dom);
        dxMind.start();
    }
    render(){
        return (
            <div id="appContainer">
                
            </div>
        )
    }
}
