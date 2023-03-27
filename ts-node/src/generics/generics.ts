export const printObject = (args:any)=>{
console.log(args);
}

export function genericFunction<T>(args:T):T{
    return args;
}

export const genericFuntionArrow = <T>(args:T):T=>{
    return args;
}