// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following 
// the next pointer. Internally, pos is used to denote the index of the node 
// that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is 
// not passed as a parameter.

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

LinkedList.prototype.detectCycle = function(head) {
    // console.log(head)
    if(head==null || head.next == null || !head.next.next){return null}
    var slow = head.next
    var fast = head.next.next
    // var cnt = 1
    // if(slow == fast.next){return 0}
    while(fast != slow){
        if(!fast.next || !fast.next.next){return null}
        slow = slow.next
        // cnt++
        fast = fast.next.next
        // if(slow == fast.next){return cnt}
    }
    let p1 = fast;
    let p2 = head;
    while(p1 !== p2){
        // console.log(p1,p2)
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
    // return
};

var l = new LinkedList()
l.InsertAtEnd(1)
l.InsertAtEnd(2)
l.InsertAtEnd(3)
l.InsertAtEnd(4)
l.InsertAtEnd(5)
head = l.InsertAtEnd(6)
console.log(l.detectCycle(head))