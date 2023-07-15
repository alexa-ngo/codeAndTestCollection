export class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }

    setNext(newNext) {
        this.next = newNext;
    }
}

export function mergeTwoLinkedLists(l1, l2) {

    let list1 = l1;
    let list2 = l2

    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }

    let newList = new ListNode(0);
    let headOfNewList = newList;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            newList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            newList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        newList = newList.next;
    }

    if (list1 === null) {
        newList.next = list2;
    } else {
        newList.next = list1;
    }
    return headOfNewList.next
}



