// Given the head of a linked list, remove the nth node from the end of the list and return its head.

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

LinkedList.prototype.removeNthFromEnd = function(head, n) {
    var cur = head
    var prev
    var size = 1
    // console.log(n)
    if(n==1 && !head.next){return null}
    while(cur.next){
        size++
        // prev = cur
        cur = cur.next
    }
    var cur = head
    console.log(size,n)
    if(n>size){return}
    if(n==size){head=head.next;return head}
    var temp = size-n
    while(temp > 0){
        prev = cur
        cur = cur.next
        temp--
    }
    // console.log(size,prev.val,cur.val)
    prev.next = cur.next
    return head
};

var l = new LinkedList()
l.InsertAtEnd(1)
l.InsertAtEnd(2)
l.InsertAtEnd(3)
l.InsertAtEnd(4)
l.InsertAtEnd(5)
head = l.InsertAtEnd(6)
console.log(l.removeNthFromEnd(head, 5))