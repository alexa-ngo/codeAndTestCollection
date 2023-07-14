export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    // getValue() {
    //     return this.value
    // }

    // setValue(newValue) {
    //     this.value = newValue;
    // }

    // getNext() {
    //     return this.next;
    // }

    setNext(newNext) {
        this.next = newNext;
    }
}



export function mergeTwoLinkedLists(l1, l2) {

    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    let newList = new Node(0);
    let headOfNewList = newList;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            newList.next = l1;
            l1 = l1.next;
        } else {
            newList.next = l2;
            l2 = l2.next
        }
        newList = newList.next;
    }

    if (l1 === null) {
        newList.next = l2;
    } else {
        newList.next = l1;
    }
    return headOfNewList.next;
}




