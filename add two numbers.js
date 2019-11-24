/**
 * Definition for singly-linked list.
 */
  /*function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0);var node=head;
    head.next=node;
    var a,b,sum,carry=0,val;
    while(l1!==null||l2!==null){
        if(l1 === null){
            a=0
        }
        else
        {
            a=l1.val;
        }
        if(l2 === null){
            b=0;
        }
        else
        {
            b=l2.val;
        }
        sum=a+b+carry;
        carry=Math.floor(sum/10);
        console.log(carry)
        val = Math.floor(sum%10);
        console.log(val)
        node.next= new ListNode(val);
        console.log(node)
        node=node.next;
        
        if(l1!==null){
            l1=l1.next;
        }
        if(l2!==null){
            l2=l2.next;
        }
    }
    if(carry!==0){
            node.next=new ListNode(carry);
        }
    
        return head.next;    
};