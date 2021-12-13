/**
 * Implement a class named ring buffer with fixed capacity such that
 *
 * constructor: takes the capacity for the ring buffer
 *
 * push: adds a value to the ring buffer.
 * pop: removes the last value from the ring buffer or undefined if it's empty.
 * peek: returns the current value of the most recent value added or undefined if none have been added
 *
 * If we have too many values (exceeding capacity) the oldest values are lost.
 *
 * The ordering of the push operations must be kept.
 */
export class RingBuffer<T> {
  valueArr: T[] = [];
  capacity: number;
  newArrCopy: T[] = [];

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public push(value: T) {
    // this.valueArr = [...this.valueArr, value];

    if (this.valueArr.length > this.capacity - 1) {
      let copyArr: T[] = [];
      copyArr = [...this.valueArr, value];
      const newData = copyArr.splice(1);
      this.valueArr = newData;
    } else this.valueArr.push(value);
    return this.valueArr;
  }

  public peek(): T | undefined {
    // not implemented
    const value = this.valueArr[this.valueArr.length - 1];
    return value;
  }

  public pop(): T | undefined {
    // not implemented
    const value = this.valueArr.splice(this.valueArr.length - 1, 1);
    return value.length ? value[0] : undefined;
  }
}
