export default class TreeLayout {
    static getInstance() {
        return treeLayout;
    }

    renderNode(node){
        let children = node.get('children');
        let title = node.get('title');
        let free = node.get('free');
        let id = node.get('id');
        let collapsed = node.get('collapsed');
        
    }

    render(state) {
        let {tree} = state;
        this.renderNode(tree);
    }
}
const treeLayout = new TreeLayout();
