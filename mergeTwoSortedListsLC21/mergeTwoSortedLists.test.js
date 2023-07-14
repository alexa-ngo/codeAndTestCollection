import { mergeTwoLinkedLists, Node } from "./mergeTwoSortedLists";

it("Returns null when both list1 and list 2 are empty", () => {
    const l1 = null;
    const l2 = null;
    expect(mergeTwoLinkedLists(l1, l2)).toEqual(null)
})


it("Returns only list1 when list2 does not exist.", () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.setNext(node2)
    const l1 = node1;
    const l2 = null;
    expect(mergeTwoLinkedLists(l1, l2)).toEqual({ "next": { "next": null, "value": 2 }, "value": 1 })
})

it("Returns only list1 when list2 does not exist.", () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.setNext(node2)
    const l1 = null;
    const l2 = node1;
    expect(mergeTwoLinkedLists(l1, l2)).toEqual({ "next": { "next": null, "value": 2 }, "value": 1 })
})

it("Returns [1,2,2,3,4,6,8] using list1=[1,2,3] and list2=[2,4,6,8]", () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    node1.setNext(node2);
    node2.setNext(node3);


    const qnode1 = new Node(2);
    const qnode2 = new Node(4);
    const qnode3 = new Node(6);
    const qnode4 = new Node(8);
    qnode1.setNext(qnode2);
    qnode2.setNext(qnode3);
    qnode3.setNext(qnode4);

    const result = mergeTwoLinkedLists(node1, qnode1)
    console.log(result)
    expect(result).toBe(result);
})

it("Returns [1,2,4,6] using list1=[1] and list2=[2,4,6]", () => {
    const node1 = new Node(1);
    const node2 = new Node(4);
    const node3 = new Node(9);
    const node4 = new Node(14);
    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);

    const qnode1 = new Node(98);
    const qnode2 = new Node(110);
    const qnode3 = new Node(2333);
    const qnode4 = new Node(1123213);
    qnode1.setNext(qnode2);
    qnode2.setNext(qnode3);
    qnode3.setNext(qnode4)

    const result = mergeTwoLinkedLists(qnode1, node1)
    console.log(result)
    expect(result).toBe(result);
})

