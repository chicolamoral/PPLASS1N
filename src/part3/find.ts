import { Result, makeFailure, makeOk, bind, either } from "../lib/result";
import * as R from "ramda";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult = <T>(pred: (x: T) => boolean, a: T[]): Result<T> => {
    const item: T | undefined = R.find(pred)(a)
    return item ? makeOk(item) : makeFailure("No element found.")
}


/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => bind(findResult((x:number) => x % 2 === 0, a), (y:number)=>makeOk((y*y)));
export const returnSquaredIfFoundEven_v3 = (a: number[]): number => either(findResult((x:number) => x % 2 === 0, a), (y: number)=>((y*y)), (z: string)=>(-1));

