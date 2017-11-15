/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import './style/index.scss';

import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import 'mxClient';
import View from './view';
console.log(mxClient)
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
            if (!mxClient.isBrowserSupported()) {
                // Displays an error message if the browser is not supported.
                mxUtils.error('Browser is not supported!', 200, false);
            } else {
                // Disables the built-in context menu
                mxEvent.disableContextMenu(container);

                // Creates the graph inside the given container
                var graph = new mxGraph(container);

                // Enables rubberband selection
                new mxRubberband(graph);

                // Gets the default parent for inserting new cells. This
                // is normally the first child of the root (ie. layer 0).
                var parent = graph.getDefaultParent();

                // Adds cells to the model in a single step
                graph.getModel().beginUpdate();
                try {
                    var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
                    var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
                    var e1 = graph.insertEdge(parent, null, '', v1, v2);
                } finally {
                    // Updates the display
                    graph.getModel().endUpdate();
                }
            }
        })
    }
}
