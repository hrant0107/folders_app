export function isFolderIncludesSearch(node, search) {
    if(node.name.toLowerCase().includes(search.toLowerCase())) {
        return true
    }

    if(!node.children) {
        return false;
    }

    return node.children.some(item => isFolderIncludesSearch(item, search))
}