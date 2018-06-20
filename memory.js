'use strict';

class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  // reserves a contiguous block of memory consisting of size boxes which you can safely modify, 
  // returning a pointer to the first box, or null if the allocation fails.
  allocate(size) {
    // if this.head + size 'is greater than' this.memory.length return null
    if (this.head + size > this.memory.length) {
      return null;
    }
    // else, this.head = this.head + size
    let start = this.head;

    this.head += size;
    // return this.head = this.head + size
    return start;
  }

  //frees the block of memory reserved using allocate.
  free(ptr) {}

  // copies size boxes of data from the from pointer to the to pointer
  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  // returns the value stored at a certain memory address
  get(ptr) {
    return this.memory[ptr];
  }
  // sets the value stored at a certain memory address.
  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;