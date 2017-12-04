import {
    TreeLayout,MindLayout
} from './layout/index';
const layoutMap = {
    'treeLayout': TreeLayout,
    'mindLayout': MindLayout
}
export default class BootStrap {
    constructor(container, state) {
        this.state = state;
    }

    updateState(newState) {
        if (this.state.tree !== newState.tree) {
            this.reRender();
        }
        this.state = newState;

    }

    reRender(state) {
        let layout = state.layout || 'treeLayout';
        let Layout = layoutMap[layout];
        if (Layout) {
            Layout.getInstance().render(state)
        } else {
            throw new Error(`not find ${layout} layout`);
        }
    }

    init() {
        this.reRender(this.state);
    }
}
