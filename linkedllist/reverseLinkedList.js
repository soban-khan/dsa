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

LinkedList.prototype.reverseList = function(head) {
    let prev = null
    while(head){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
     return prev
 };


 var l = new LinkedList()
l.InsertAtEnd(1)
l.InsertAtEnd(2)
l.InsertAtEnd(3)
l.InsertAtEnd(4)
l.InsertAtEnd(5)
head = l.InsertAtEnd(6)
console.log(l.reverseList(head))