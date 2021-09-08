var Node = function(val){
    this.val = val
    this.next = null
this.prev = null
}

/**
* Initialize your data structure here.
*/
var MyLinkedList = function() {
this.head = null
this.size = 0
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/

MyLinkedList.prototype.get = function(index) {
if(index >= this.size || index < 0){
    return -1
}
var cur = this.head
//  // if(index==0){console.log("====");return cur.val}
// console.log("====before","value",cur, "index", index,"size",this.size)
let i =0
while(index>0){
    cur = cur.next
    index--
}
// console.log("=====after","value",cur, "index", index,"size",this.size)
// console.log("to return",cur.val)
//  console.log(this.size,index)
return cur.val
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/

MyLinkedList.prototype.addAtHead = function(val) {
console.log("add at head")
// console.log(this.size,this.head)
var ll = new Node(val)
if(!this.head){
    ll.next = this.head
    this.head = ll
    this.size++
    return
}
ll.next = this.head
this.head.prev = ll
this.head = ll
this.size++
// console.log(this.size,this.head)
return
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/

MyLinkedList.prototype.addAtTail = function(val) {
console.log("add at tail")
// console.log(this.size,this.head)
const newNode = new Node(val);
if(this.head !== null){
    let cur = this.head;
    while(cur.next !== null){
        cur = cur.next;
    }
    newNode.prev = cur
    cur.next = newNode;
}
else{
    this.head = newNode;
}
this.size++;
// console.log(this.size,this.head)
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
console.log("add at index")
// console.log(this.size,this.head)
if (index > this.size || index < 0){return}
if (index === 0){this.addAtHead(val);return}
if (index == this.size){this.addAtTail(val);return}
var ll = new Node(val)
var cur = this.head
var prev
while(index > 0){
    prev = cur
    cur = cur.next
    index--
}
prev.next = ll
ll.prev = prev
ll.next = cur
cur.prev = ll
this.size+=1
// console.log(this.size,this.head)
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
console.log("delete at index")
// console.log(this.size,this.head)
// console.log(index, this.size)
if(index >= this.size || index < 0){return}
if(index === 0){this.head = this.head.next; this.size-=1;return}
var cur = this.head
var prev
// var cnt =0
// console.log(index)
while(index > 0){
    // prev = cur
    cur = cur.next
    index--
    // cnt++
}
// console.log(cnt)
prev = cur.prev
let next = (cur.next == null)? null:cur.next

prev.next = next
if(next) {next.prev = prev}
// console.log("test")
this.size-=1
// console.log(this.size, this.head)
// console.log(index, this.size)
};

 
// * Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList()
console.log(obj.get(2))
obj.addAtHead(34)
obj.addAtHead(45)
obj.addAtHead(67)
console.log(obj.get(2))
obj.addAtTail(4)
obj.addAtTail(44)
obj.addAtTail(87)
console.log(obj.get(5))
obj.addAtIndex(2,98)
console.log(obj.get(2))
obj.deleteAtIndex(2)
console.log(obj.get(2))
