// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
// If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:


// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

var Node = function(val){
    this.val = val
    this.next = null
}

var LinkedList = function(){
    this.head = null
    this.size = 0
}

LinkedList.prototype.InsertAtEnd = function(val){
    const ll = new Node(val)

        var cur = this.head

        if(this.head == null){
            this.head = ll
        } else{
            while(cur.next){
                cur = cur.next
            }
            cur.next = ll
        }
        this.size++
        return this.head
}

LinkedList.prototype.getIntersectionNode = function(headA, headB) {
    var a = headA
    var b = headB
    while(a){
        b = headB
        while(b){
            if(a == b){return a}
            b = b.next
        }
        a= a.next
    }
};

var l = new LinkedList()
l.InsertAtEnd(1)
l.InsertAtEnd(2)
l.InsertAtEnd(3)
l.InsertAtEnd(4)
l.InsertAtEnd(5)
head = l.InsertAtEnd(6)
console.log(l.getIntersectionNode(head))