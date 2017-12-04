import {fromJS} from 'immutable'
export default class State {
    constructor(tree){
        this.tree = fromJS(tree);
    }

    applyTr(tr){
        
    }

}
