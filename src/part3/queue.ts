import { State, bind } from "./state";
import * as R from "ramda";
import { makeFailure } from "../lib/result";
export type Queue = number[];

export const enqueue = <Queue, A>(x:number):State<Queue,A> =>{
    return bind((s:Queue)=>[s,"enq"], ((b:string)=>{   
        b === "enq" ?
        (s:number[])=>([x].concat(s)) : makeFailure("Parameter Error"); ///need to check what the fuck is the problem
    }))
};
export const dequeue = undefined;

export const queueManip = undefined;