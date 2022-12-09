export default class Node {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }
  value() {
    return { data: this.data, next: this.next };
  }
}
