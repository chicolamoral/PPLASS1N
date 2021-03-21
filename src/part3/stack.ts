import { State, bind } from "./state";

export type Stack = number[];


export const push = (x: number): State<Stack, undefined> => {
    return (s: Stack): [Stack, undefined] => {    
        return [[x].concat(s), undefined];
    }
};

export const pop = (s: Stack): [Stack, number] => [s.slice(1), s[0]];

export const stackManip: State<Stack, undefined> = 
    bind(
        pop, x => bind(
            push(x*x), () => bind(
                pop, y => bind(
                    push(x+y), () => s => [s, undefined]))));