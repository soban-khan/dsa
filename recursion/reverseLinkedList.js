/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null
    if(!head || !head.next) return head
    function reverse(head){
        if(!head) return
        // prev.next = head.next
        let next = head.next
        head.next = prev
        prev = head
        head = next
        reverse(head)
        // console.log(prev)
        return prev
        
    }
     head = reverse(head)
     return head
 };