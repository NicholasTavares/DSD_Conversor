class Stack {
  constructor() {
    this._count = 0;
    this._items = [];
  }

  push(element) {
    this._items[this._count] = element;
    this._count++;
  }

  size() {
    return this._count;
  }

  isEmpty() {
    return this._count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._items[this._count - 1];
  }

  clear() {
    this._items = {};
    this._count = 0;
  }
}

module.exports = Stack;
