function stackUseLinkedList() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.push = function (elm) {
    let node = new Node(elm),
      current;

    current = head;
    node.next = current;
    head = node;
    length++;
  };

  this.pop = function () {
    let current = head;
    if (current) {
      let elm = current.element;
      current = current.next;
      head = current;
      length--;
      return elm;
    }
    return null;
  };

  this.size = function () {
    return length;
  };
}

const stack = new stackUseLinkedList();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.size());
