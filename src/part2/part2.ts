import * as R from "ramda";

const stringToArray = (x:string) => R.split("", x);

/* Question 1 */
export const countVowels = (x:string) => stringToArray(x).reduce((acc, cur) => acc + (['a','e','i','o','u'].includes(cur) ? 1 : 0), 0), 0);        

/* Question 2 */
export const runLengthEncoding = x => {
    const apps = x.split("").reduce((acc, cur) =>
        cur === acc.char ?
            {...acc, count: acc.count + 1} :
            {pairs: acc.pairs.concat([[acc.char, acc.count]]), char: cur, count: 1},
        {xpairs: [], char: null, count: 0}
    )
    return apps.pairs.slice(1).reduce((acc, pair) => acc + pair[0] + pair[1], "") + 
        (apps.char ? apps.char + apps.count : "")
}

/* Question 3 */
export const isPaired = (x:string): boolean =>{ 
    const legality = (arr: string [], stack : string[]): boolean =>{
        if(arr.length == 0){
            return true;
        }
        else {
            if(['{','[','('].includes(arr[0])){
                return legality(arr.slice(1), stack.concat(arr[0]))
            }
            else if(stack.length === 0){
                return false;
            }
            else{
                if(['}',']',')'].includes(arr[0])){
                    if(arr[0] === stack[(stack.length-1)]){
                        return legality(arr.slice(1), stack.slice((stack.length-1)))  
                    }
                    else{
                        return false
                    }
                }
                else{
                    return false
                }
            }
        }
    }
    return legality(stringToArray(x).filter(y=> (['[','{','(','}',']',')'].includes(y))),[]);
}