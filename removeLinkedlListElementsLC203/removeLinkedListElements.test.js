import { Node, removeLinkedListElements } from "./removeLinkedListElements";

it("Returns null if the head is null", () => {
    const node1 = null;
    expect(removeLinkedListElements(node1, 3)).toBe(null);
});

it("If there is one node, and the value doesn't match the remove value, the node is returned.", () => {
    const node1 = new Node(8);
    expect(removeLinkedListElements(node1, 1)).toBe(node1);
});

it("If there is one node, and the value matches the remove node, the null is returned.", () => {
    const node1 = new Node(8);
    expect(removeLinkedListElements(node1, 8)).toBe(null);
});

it('If all five nodes have the same value that matches the remove value, null is returned.', () => {
    const node1 = new Node(3);
    const node2 = new Node(3);
    const node3 = new Node(3);
    const node4 = new Node(3);
    const node5 = new Node(3);
    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);
    node4.setNext(node5);
    const result = removeLinkedListElements(node1, 3)
    expect(result).toBe(null);
});

it('Removes the first, third, and fifth node if the remove value matches.', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(1);
    const node4 = new Node(2);
    const node5 = new Node(1);

    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);
    node4.setNext(node5);
    const result = removeLinkedListElements(node1, 1)
    console.log(result)
    expect(result).toEqual({ "next": { "next": null, "val": 2 }, "val": 2 })
})

it('If the first four nodes matches the remove value, and the last node doesn not match. The last node is returned.', () => {
    const node1 = new Node(1);
    const node2 = new Node(1);
    const node3 = new Node(1);
    const node4 = new Node(1);
    const node5 = new Node(5);

    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);
    node4.setNext(node5);
    const result = removeLinkedListElements(node1, 1)

    expect(result).toEqual({ "next": null, "val": 5 })

})
