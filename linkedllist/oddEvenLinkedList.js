// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with 
// even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.


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

LinkedList.prototype.oddEvenList = function(head) {
    if (!head || !head.next){return head}
    var newHeadOdd = head
    var newHeadEven = head.next
    // newHeadOdd = head
    // newHeadEven = head.next
    var oddPointer = newHeadOdd
    var evenPointer = newHeadEven
    var cur = head.next.next
    var cnt = 1
    while(cur){
        if(cnt == 1){
            oddPointer.next = cur
            oddPointer = oddPointer.next
            cnt = 678
        } else {
            evenPointer.next = cur
            evenPointer = evenPointer.next
            cnt = 1
        }
        cur = cur.next   
    }
    evenPointer.next = null
    oddPointer.next = newHeadEven
    // console.log(newHeadOdd, newHeadEven)
    return newHeadOdd
};


var l = new LinkedList()
l.InsertAtEnd(1)
l.InsertAtEnd(2)
l.InsertAtEnd(3)
l.InsertAtEnd(4)
l.InsertAtEnd(5)
head = l.InsertAtEnd(6)
x = l.oddEvenList(head)
while(x){
    console.log(x.val)
    x = x.next
}