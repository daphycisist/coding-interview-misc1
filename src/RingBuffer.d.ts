export declare class RingBuffer<T> {
    valueArr: T[];
    capacity: number;
    newArrCopy: T[];
    constructor(capacity: number);
    push(value: T): T[];
    peek(): T | undefined;
    pop(): T | undefined;
}
