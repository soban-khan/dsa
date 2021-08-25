class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    InsertAtHead(val){
        var ll = new Node(val)
        ll.next = this.head
        this.head = ll
        this.size++
    }

    InsertAtEnd(element){
        const ll = new Node(element)

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
    }

    display(){
        var cur = this.head
        while(cur){
            console.log(cur.data)
            cur = cur.next
        }
    }

    InsertAt(element, position){
        const ll = new Node(element)

        var cur
        var prev

        if(position == 0){
            // this.head = ll
            ll.next = this.head
            this.head = ll
        } else{
            cur = this.head
            while(position > 0){
                prev = cur
                cur = cur.next
                position--
            }
            prev.next = ll
            ll.next = cur
        }
        this.size++
    }

    get(index){
        var cur = this.head
        while(index>0){
            cur = cur.next
            index--
        }
        console.log(cur.data)
    }

    delete(index){
        if(index >= this.size || index < 0){return -1}
        if(index === 0){this.head = this.head.next; return -1}
        var cur = this.head
        var prev
        while(index > 0){
            prev = cur
            cur = cur.next
            index--
        }
        prev.next = cur.next
        this.size--
    }
}



var a = new LinkedList()
a.InsertAtEnd(45)
// a.InsertAtEnd(78)
// a.InsertAtEnd(65)
// a.InsertAtEnd(7)
// a.InsertAtEnd(8)
// a.InsertAt(34,3)
// a.InsertAtHead(54)
// a.display()
// console.log("size",a.size)
// console.log("=====get======")
// a.get(5)
// console.log("=====get======")
// a.delete(5)
a.display()
console.log(a.head)
if(!a.head.next){console.log('sfad')}

// var Node = function(){
//     console.log('Node')
// }

// var ll = function(){
//     v=334
//     console.log(v)
// }
// Node.prototype.add = function(){
//     console.log('add')
// }
// var x = new Node()
// x.add()

// var a = new ll()