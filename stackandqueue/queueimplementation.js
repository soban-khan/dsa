/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    // console.log(k)
    this.queue = new Array(k)
    this.size = this.queue.length
    this.front =  0
    this.rear =  -1
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    // console.log("enqueue start",this.queue, this.size, "rear", this.rear)
    if(this.isFull()){return false}
    this.rear = (this.rear+1) % this.queue.length
    this.queue[this.rear] = value
    this.size--
    // console.log("enqueue end",this.queue, this.size, "rear",this.rear)
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    // console.log("dequeue",this.queue, this.size)
    if(this.isEmpty()){return false}
    this.front = (this.front+1) % this.queue.length
    this.size++
    // console.log("dequeue end",this.queue, this.size,"front",this.front)
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    // console.log('front',this.queue, this.size, this.front)
    if(this.isEmpty()){return -1}
    // console.log('front end',this.queue, this.size,this.front)
    return this.queue[this.front]
    // return this.isEmpty() ? -1 : this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    // console.log('rear========',this.queue, this.size, this.rear)
    if(this.isEmpty()){return -1}
    // console.log('rear end======',this.queue, this.size, this.rear)
    // let x = (this.rear > 0)? this.rear-1 : this.rear
    // console.log("888888888888",x)
    return this.queue[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    // console.log("empty beg",this.queue, this.size)
    if(this.size == this.queue.length){return true}
    // console.log("empty end",this.queue, this.size)
    return false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    // console.log("full beg",this.queue, this.size)
    if(this.size == 0){return true}
    // console.log("full end",this.queue, this.size)
    return false
};

 
//  * Your MyCircularQueue object will be instantiated and called as such:
var obj = new MyCircularQueue(4)
var param_1 = obj.enQueue(3) 
var param_2 = obj.deQueue()
var param_3 = obj.Front()
var param_4 = obj.Rear()
var param_5 = obj.isEmpty()
var param_6 = obj.isFull()
 
 