declare class RingBuffer<T> {
    valueArr: T[];
    capacity: number;
    constructor(capacity: number);
    push(value: T): T[];
    peek(): T | undefined;
    pop(): T | undefined;
}
