function node(val, right, left) {
    this.val = val
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function btree() {
    this.root = null
}

btree.prototype.insertroot = function (val) {
    let n = new node(val)
    this.root = n
}

btree.prototype.insertleft = function (leftOfThisNode, val) {
    let n = new node(val)
    let cur = leftOfThisNode
    if(cur.left) {console.log('Node already present');return}
    else cur.left = n
}

btree.prototype.insertright = function (rightOfThisNode, val) {
    let n = new node(val)
    let cur = rightOfThisNode
    if(cur.right) {console.log('Node already present');return}
    else cur.right = n
}

btree.prototype.insertLeftOf = function(nodeToInsertLeftOf, valueOfNodeToBeSearched, valueOfNewNode){
    if (!this.root) this.insertroot(valueOfNewNode)
    if(!nodeToInsertLeftOf) return
    if (nodeToInsertLeftOf.val == valueOfNodeToBeSearched) {
        this.insertleft(nodeToInsertLeftOf, valueOfNewNode)
        return
    }
    this.insertLeftOf(nodeToInsertLeftOf.left, valueOfNodeToBeSearched, valueOfNewNode)
    this.insertLeftOf(nodeToInsertLeftOf.right, valueOfNodeToBeSearched, valueOfNewNode)
}

btree.prototype.insertRightOf = function(nodeToinsertRightOf, valueOfNodeToBeSearched, valueOfNewNode){
    if (!this.root) this.insertroot(valueOfNewNode)
    if(!nodeToinsertRightOf) return
    if (nodeToinsertRightOf.val == valueOfNodeToBeSearched) {
        this.insertright(nodeToinsertRightOf, valueOfNewNode)
        return
    }
    this.insertRightOf(nodeToinsertRightOf.left, valueOfNodeToBeSearched, valueOfNewNode)
    this.insertRightOf(nodeToinsertRightOf.right, valueOfNodeToBeSearched, valueOfNewNode)
}

btree.prototype.preorder = function (node) {
    if (!node) return
    console.log(node.val)
    this.preorder(node.left)
    this.preorder(node.right)
}

btree.prototype.postorder = function (node) {
    if (!node) return
    this.postorder(node.left)
    this.postorder(node.right)
    console.log(node.val)
}

btree.prototype.inorder = function (node) {
    if (!node) return
    this.inorder(node.left)
    console.log(node.val)
    this.inorder(node.right)
}



let bt = new btree()
bt.insertroot(45)
bt.insertLeftOf(bt.root, 45, 78)
bt.insertLeftOf(bt.root, 78, 67)
bt.insertRightOf(bt.root, 45, 6)
bt.insertRightOf(bt.root, 78, 65)
console.log(bt.root)
// bt.preorder(bt.root)
bt.inorder(bt.root)