export class Node {

    constructor(value) {
        this.val = value;
        this.next = null;
    }

    setNext(newNext) {
        this.next = newNext;
    }
}

export function removeLinkedListElements(head, val) {

    if (head === null) {
        return null;
    }

    if ((head.val === val) && (head.next === null)) {
        return null;
    }

    let workingHead = head;

    while ((workingHead !== null) && workingHead.val === val) {
        workingHead = workingHead.next
    }

    if (workingHead === null) {
        return null;
    }

    let workingNode = workingHead;
    let movingNode = workingHead;

    while (workingNode !== null) {
        while (workingNode.next !== null && movingNode.next.val === val) {
            workingNode.next = workingNode.next.next;
        }
        movingNode = movingNode.next;
        workingNode = movingNode;
    }
    return workingHead;
};


