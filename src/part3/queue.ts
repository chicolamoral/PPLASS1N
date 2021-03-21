import { State, bind } from "./state";
import * as R from "ramda";
import { makeFailure, makeOk, Result } from "../lib/result";
export type Queue = number[];

// export const enqueue = <Result, A>(x:number):State<Result,A> =>{
//     return bind((s:Queue)=>[s,"enq"], ((b:string)=>{   
//         b === "enq" ?
//         (s:number[])=>([s.concat(x),makeOk(undefined)]) : makeFailure("Parameter Error"); ///need to check what the fuck is the problem
//     }))
// };

export const enqueue = (x:number):State<Queue,any> =>{
    return (s:Queue):[Queue,any]=>{   
        return ([s.concat(x), undefined])
    }
};

export const dequeue = (s:Queue):[Queue,any]=>{   
        if(s.length > 0) {
            return ([s.slice(1), s[0]]);
        } 
        else{
            return [s,makeFailure("Queue is already empty, Cannot Dequeue")];
        }
    };



// export const dequeue = <Result>():State<Result,number> =>{
//     return bind((s:Queue)=>[s,"deq"], ((b:string)=>{   
//         if(b === "deq"){
//             (s:number[])=>{
//                 if(s.length > 0){
//                     const dequeued :number = s[0];
//                     return [s.slice(1),makeOk(dequeued)];
//                 }
//                 return [s,makeFailure("Queue is already empty, Cannot Dequeue")]; ///need to figure out
//             }
//         }
//         return makeFailure("Parameter Error") ///need to check what the fuck is the problem
//     }))
// };

export const queueManip =  <Result>(par:Queue):[Queue,number]=>{
    const step1: [Queue, number] = dequeue(par);
    const step2: State<Queue,number> = enqueue((step1[1]*2))
    const stepTemp:  [Queue, number] = step2(step1[0]);
    const step3: State<Queue,number> = enqueue(stepTemp[1]/3);
    const stepTemp2:  [Queue, number] = step3(step1[0]);
    const step4:  [Queue, number] = dequeue(stepTemp2[0]);
    return step4 //didn't manage to do it with bind

    const q:Queue =[1,2,3];
    //bind(bind(dequeue, enqueue,enqueue)
}