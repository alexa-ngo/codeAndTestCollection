import { mergeTwoLinkedLists, ListNode } from "./mergeTwoSortedLists";

it("Returns null when both list1 and list 2 are empty", () => {
    const l1 = null;
    const l2 = null;
    expect(mergeTwoLinkedLists(l1, l2)).toEqual(null)
})

it("Returns only list1 when list2 is null.", () => {
    const node1 = new ListNode(1);
    const l1 = node1;
    const l2 = null;
    const result = mergeTwoLinkedLists(l1, l2)
    expect(result).toEqual({ next: null, "val": 1 })
})

it("Returns only list1 when list2 is null.", () => {
    const node1 = new ListNode(5);
    const node2 = new ListNode(10);
    node1.setNext(node2)
    const l1 = null;
    const l2 = node1;
    const result = mergeTwoLinkedLists(l1, l2)
    expect(result).toEqual(result)
})


it("Returns [1,2,2,3,4,6,8] using list1=[1,2,3] and list2=[2,4,6,8]", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    node1.setNext(node2);
    node2.setNext(node3);

    const qnode1 = new ListNode(2);
    const qnode2 = new ListNode(4);
    const qnode3 = new ListNode(6);
    const qnode4 = new ListNode(8);
    qnode1.setNext(qnode2);
    qnode2.setNext(qnode3);
    qnode3.setNext(qnode4);

    console.log(node1)
    console.log(qnode1)

    const result = mergeTwoLinkedLists(node1, qnode1)
    console.log(result)
    expect(result).toEqual(result);
})

it("Returns [1,2,2,3,4,6,8] using list1=[11,22,33,44,88] and list2=[2,4,6,8]", () => {
    const node1 = new ListNode(11);
    const node2 = new ListNode(22);
    const node3 = new ListNode(33);
    const node4 = new ListNode(44);
    const node5 = new ListNode(88);
    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);
    node4.setNext(node5);
    const qnode1 = new ListNode(2);
    const qnode2 = new ListNode(4);
    const qnode3 = new ListNode(6);
    const qnode4 = new ListNode(8);
    qnode1.setNext(qnode2);
    qnode2.setNext(qnode3);
    qnode3.setNext(qnode4);

    const result = mergeTwoLinkedLists(node1, qnode1)
    console.log(result)
    expect(result).toEqual(result);
})

