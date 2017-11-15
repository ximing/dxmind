/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import './style/index.scss';

import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import View from './view';

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
        })
    }
}
