import { State, bind } from "./state";

export type Queue = number[];


export const enqueue = (x: number): State<any, undefined> => {
    return (s: Queue): [Queue, undefined] => {   
        return [s.concat(x), undefined]
    }
};

export const dequeue = (s:Queue): [Queue,number] => [s.slice(1) ,s[0]];

export const queueManip: State<Queue, number> = 
    bind(
        dequeue, x => bind(
            enqueue(x*2), () => bind(
                enqueue(x/3), () => bind(
                    dequeue, y => s => [s, y]))))
