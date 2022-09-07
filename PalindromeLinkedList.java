import java.util.Stack;

//Definition for singly-linked list.
class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class PalindromeLinkedList {
    public static boolean isPalindrome(ListNode head) {
        ListNode currentNode = head;
        var stack = new Stack<Integer>();

        while(currentNode != null) {
            stack.push(currentNode.val);
            currentNode = currentNode.next;
        }

        currentNode = head;

        while(!stack.isEmpty()) {
            int topOfTheStack = stack.pop();

            if(topOfTheStack != currentNode.val) {
                return false;
            }

            currentNode = currentNode.next;
        }

        return true;
    }

    public static void main(String[] args) {
        var lastNode = new ListNode(1);
        var thirdNode = new ListNode(2, lastNode);
        var secondNode = new ListNode(2, thirdNode);
        var firstNode = new ListNode(1, secondNode);

        boolean result = isPalindrome(firstNode);
        System.out.println(result);
    }
}
