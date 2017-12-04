/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import './style/index.scss';
import shortId from 'shortid';
import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import View from './view/view';
import MindCore from './core/mind';
import State from './state/state.js';
export default class DXMind {
    constructor(dom) {
        this.dom = dom;
    }

    start(dom, conf) {
        if (dom) {
            this.dom = dom;
        }
        ReactDOM.render( < View / > , this.dom, () => {
            let container = document.getElementById('dxContainer');
            let appState = new State({
                tree: {
                    title: 'root',
                    style: {},
                    id: shortId.generate(),
                    children: [{
                        id: shortId.generate(),                        
                        title: 'child1'
                    }, {
                        id: shortId.generate(),                        
                        title: 'child1'
                    }]
                }
            });
            let mind = new MindCore(container, appState);
            window.appState = appState;
            mind.init();
        })
    }
}
