import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    const node = new Node(value);
    this.length++;
    let nodeValue = node.value();
    if (this.head === null) {
      return (this.head = nodeValue);
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = nodeValue;
  }
  prepend(value) {
    const node = new Node(value);
    this.length++;
    const nodeValue = node.value();
    if (this.head === null) {
      return (this.head = nodeValue);
    }
    let head = this.head;
    nodeValue.next = head;
    this.head = nodeValue;
  }
  size() {
    return this.length;
  }
  headNode() {
    return this.head;
  }
  tail() {
    if (this.length <= 1) {
      return "There is no such tail or the head is the tail";
    }
    let head = this.head;
    let end;
    while (head.next !== null) {
      head = head.next;
      end = head;
    }
    return end;
  }
  at(index) {
    if (index >= this.length) {
      return "there isn't a node in that index";
    }
    if (index === 0) {
      return this.headNode();
    }
    let spot = 0;
    let current = this.head;
    while (current.next !== null) {
      spot++;
      current = current.next;

      if (spot == index) {
        return current;
      }
    }
  }
  pop() {
    if (this.length == 1) {
      this.head = null;
      this.length--;
    }
    if (this.length >= 2) {
      let current = this.head;
      const end = JSON.stringify(this.tail());
      this.length--;
      let list = JSON.stringify(current);
      const newList = list.replace(end, null);
      let parsed = JSON.parse(newList);
      this.head = parsed;
    }
  }
  contains(value) {
    if (this.head === null) {
      return false;
    }
    let stringify = JSON.stringify(this.head);
    return stringify.includes(value);
  }
  find(value) {
    if (this.head === null) {
      return null;
    }
    let spot = 0;
    let current = this.head;
    if (current.data == value) {
      return spot;
    }
    while (current.next !== null) {
      spot++;
      current = current.next;

      if (current.data == value) {
        return spot;
      }
    }
    return null;
  }
  toString() {
    if (this.length < 1) {
      return null;
    }
    let string = "";
    let nodeData = [];
    let current = this.head;
    let HeadData = current.data;
    nodeData.push(`${HeadData}`);
    if (this.length >= 1) {
      while (current.next !== null) {
        current = current.next;
        nodeData.push(current.data);
      }
      while (nodeData.length !== 0) {
        string = `${string} (${nodeData[0]}) => `;
        nodeData.shift();
      }
    }
    return `${string} null`;
  }
}
