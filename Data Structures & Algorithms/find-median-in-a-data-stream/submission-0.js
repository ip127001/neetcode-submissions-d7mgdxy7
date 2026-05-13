class MinHeapForLargeNums {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  push(num) {
    this.list.push(num);
    this.heapifyUp(this.list.length-1);
  }

  pop() {
    const lastElement = this.list[this.list.length-1];
    const firstElement = this.list[0];
    this.list[0] = lastElement;
    this.list[this.list.length-1] = firstElement;

    const result = this.list.pop();
    this.heapifyDown(0);
    return result;
  }

  peak() {
    console.log('min heap: peak', this.list[0])
    return this.list[0];
  }

  print() {
    this.list.forEach(el => console.log(el));
  }

  heapifyUp(idx) {
    if (idx === 0) {
      return;
    }

    const parentIdx = this.getParent(idx);

    let temp;
    if (this.list[idx] < this.list[parentIdx]) {
      temp = this.list[parentIdx];
      this.list[parentIdx] = this.list[idx];
      this.list[idx] = temp;
      this.heapifyUp(parentIdx);
    }

    return;
  }

  heapifyDown(idx) {
    if (idx >= this.list.length) {
      return;
    }

    let minOfBothIdx = this.list[this.getLeftChild(idx)] > this.list[this.getRightChild(idx)] ? this.getRightChild(idx) : this.getLeftChild(idx);

    const node = this.list[idx];
    let minOfBothVal = this.list[minOfBothIdx];

    if (minOfBothVal < node) {
      this.list[minOfBothIdx] = node;
      this.list[idx] = minOfBothVal;
      this.heapifyDown(minOfBothIdx);
    }
  }

  getParent(idx) {
    return Math.floor((idx-1)/2);
  }

  getLeftChild(idx) {
    return 2 * idx + 1;
  }

  getRightChild(idx) {
    return 2 * idx + 2;
  }
}

class MaxHeapForSmallNums {

    constructor() {
        this.list = [];
    }

    size() {
        return this.list.length;
    }
  
    push(num) {
        this.list.push(num);
        this.heapifyUp(this.list.length-1);
    }

  pop() {
    const lastElement = this.list[this.list.length-1];
    const firstElement = this.list[0];
    this.list[0] = lastElement;
    this.list[this.list.length-1] = firstElement;

    const result = this.list.pop();
    this.heapifyDown(0);
    return result;
  }

  peak() {
    console.log('max heap: peak', this.list[0])
    return this.list[0];
  }

  print() {
    this.list.forEach(el => console.log(el));
  }

  heapifyUp(idx) {
    if (idx === 0) {
      return;
    }

    const parentIdx = this.getParent(idx);

    let temp;
    if (this.list[idx] > this.list[parentIdx]) {
      temp = this.list[parentIdx];
      this.list[parentIdx] = this.list[idx];
      this.list[idx] = temp;
      this.heapifyUp(parentIdx);
    }

    return;
  }

  heapifyDown(idx) {
    if (idx >= this.list.length) {
      return;
    }

    let maxOfBothIdx = this.list[this.getLeftChild(idx)] < this.list[this.getRightChild(idx)] ? this.getRightChild(idx) : this.getLeftChild(idx);

    const node = this.list[idx];
    let maxOfBothVal = this.list[maxOfBothIdx];

    if (maxOfBothVal > node) {
      this.list[maxOfBothIdx] = node;
      this.list[idx] = maxOfBothVal;
      this.heapifyDown(maxOfBothIdx);
    }
  }

  getParent(idx) {
    return Math.floor((idx-1)/2);
  }

  getLeftChild(idx) {
    return 2 * idx + 1;
  }

  getRightChild(idx) {
    return 2 * idx + 2;
  }
}

class MedianFinder {
    constructor() {
        this.minHeapForLargeNums = new MinHeapForLargeNums();
        this.maxHeapForSmallNums = new MaxHeapForSmallNums();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxHeapForSmallNums.size() === 0 || num < this.maxHeapForSmallNums.peak()) {
            this.maxHeapForSmallNums.push(num);
        } else {
            this.minHeapForLargeNums.push(num);
        }

        if (this.maxHeapForSmallNums.size() > this.minHeapForLargeNums.size() + 1) {
            this.minHeapForLargeNums.push(this.maxHeapForSmallNums.pop());
        } else if (this.maxHeapForSmallNums.size() < this.minHeapForLargeNums.size()) {
            this.maxHeapForSmallNums.push(this.minHeapForLargeNums.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeapForSmallNums.size() === this.minHeapForLargeNums.size()) {
            return ((this.maxHeapForSmallNums.peak() + this.minHeapForLargeNums.peak())/2) 
        }
        return this.maxHeapForSmallNums.peak();
    }
}
