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
 var swapPairs = function(head) {
    function swap(head){
        if(!head || !head.next) return head
        var cur = head.next
        head.next = cur.next
        cur.next = head
        // head = cur
        // console.log(head)
        cur.next.next = swap(cur.next.next)
        return cur
    }
    head = swap(head)
    return head
};