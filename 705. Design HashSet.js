// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

// ***** With Array *****
class MyHashSet1 {
  table = new Array(1000001)

  add(key) {
    this.table[key] = null
  }

  contains(key) {
    return this.table[key] === null
  }

  remove(key) {
    delete this.table[key]
  }
}

const myTable = new MyHashSet1()

// ***** With Hash. Метод списков *****
class Node {
  constructor(key) {
    this.key = key
    this.next = null
  }
}

class MyHashSet {
  constructor() {
    this.tableSize = 50021
    this.table = new Array(this.tableSize)
    this.factor = 2341
  }

  printTable() {
    console.log(this.table)
  }

  hashSum(key) {
    return (key * this.factor) % this.tableSize
  }

  add(key) {
    const idx = this.hashSum(key)

    if (this.table[idx]) {
      let prev = null
      let pointer = this.table[idx]
      while (pointer) {
        if (pointer.key === key) {
          pointer.key = key
          return
        }
        prev = pointer
        pointer = pointer.next
      }

      prev.next = new Node(key)
    } else {
      this.table[idx] = new Node(key)
    }
  }

  contains(key) {
    const idx = this.hashSum(key)
    if (!this.table[idx]) return false

    let pointer = this.table[idx]
    while (pointer !== null) {
      if (pointer.key === key) {
        return true
      }
      pointer = pointer.next
    }
    return false
  }

  remove(key) {
    const idx = this.hashSum(key)
    if (!this.table[idx]) {
      return
    }

    let pointer = this.table[idx]
    if (pointer.key === key) this.table[idx] = pointer.next

    let prev = pointer
    pointer = pointer.next
    while (pointer !== null) {
      if (pointer.key === key) {
        prev.next = pointer.next
        return
      }

      prev = pointer
      pointer = pointer.next
    }
  }
}

const obj = new MyHashSet()
