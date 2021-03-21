import { State, bind } from "./state";
import { makeFailure, makeOk, Result } from "../lib/result";
export type Stack = number[];

export const push = (x:number):State<Stack,Result<any>> =>{
    return (s:Stack):[Stack,Result<any>]=>{   
        return [[x].concat(s), makeOk(undefined)];
    }
};
export const pop = (s:Stack):[Stack,Result<any>]=>{   
    if(s.length > 0) {
        return ([s.slice(1), makeOk(s[0])]);
    } 
    else{
        return [s,makeFailure("Stack is already empty, Cannot Pop")];
    }
};
export const stackManip = undefined;