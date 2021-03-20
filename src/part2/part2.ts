import * as R from "ramda";

export const stringToArray = (x:string): string[] => R.split("", x);

/* Question 1 */
export const countVowels = (x:string): number => 
    stringToArray(x)
    .map(ch => ch.toLowerCase())
    .filter(ch => ['a','e','i','o','u'].includes(ch)).length;  


/* Question 2 */
export interface encodingAcc {
    pairs: [string, number][],
    char: string,
    count: number
}

export const runLengthEncoding = (x: string): string => {
    const appearances: encodingAcc = stringToArray(x).reduce((acc: encodingAcc, cur: string) =>
        cur === acc.char ?
            {
                ...acc, 
                count: acc.count + 1
            } :
            {
                pairs: acc.pairs.concat([[acc.char, acc.count]]), 
                char: cur, 
                count: 1
            },
        {pairs: [], char: "", count: 0}
    )
    return appearances.pairs.slice(1).reduce((acc, pair) => acc + pair[0] + (pair[1] > 1 ? pair[1] : ""), "") + 
        (appearances.char + (appearances.count > 1 ? appearances.count : "")) // concat the last pair
}


/* Question 3 */
export const isPaired = (x:string): boolean =>{ 
    const pairs: {[opener: string] : string} = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    const legality = (arr: string [], stack : string[]): boolean => {
        if(arr.length === 0)
            return true;
        if (['{','[','('].includes(arr[0]))
            return legality(arr.slice(1), stack.concat(arr[0]))
        if (stack.length === 0)
            return false;
        if (arr[0] === pairs[stack[stack.length-1]])
            return legality(arr.slice(1), stack.slice(0, stack.length-1))  
        return false
    }
    return legality(stringToArray(x).filter(y => ['[',']','{','}','(',')'].includes(y)), []);
}