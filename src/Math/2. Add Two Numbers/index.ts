class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const root = new ListNode(0);
  let currentNode = root;
  let currentVal: number = 0; // 7 + 7 = 14, so this value gonna be 1
  while (l1 || l2) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    const val = val1 + val2 + currentVal;
    currentVal = Math.floor(val / 10);
    currentNode.next = new ListNode(val % 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    currentNode = currentNode.next;
  }
  if (currentVal) {
    currentNode.next = new ListNode(currentVal);
  }
  return root.next;
};

export { ListNode, addTwoNumbers }