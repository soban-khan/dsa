// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, 
// and return the new head.
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

LinkedList.prototype.removeElements = function(head, val) {
    if(!head){return null}
    while(head.val == val){head = head.next;if(!head){return head}}
    var prev = head
    let next = head.next
    while(next){
        while(next.val == val){
            next = next.next
            if(!next){prev.next = null;return head}
        }
        prev.next = next
        prev = next
        next = next.next
    }
    return head
};


var l = new LinkedList()
l.InsertAtEnd(1)
l.InsertAtEnd(2)
l.InsertAtEnd(3)
l.InsertAtEnd(4)
l.InsertAtEnd(5)
head = l.InsertAtEnd(6)
console.log(l.removeElements(head,6))