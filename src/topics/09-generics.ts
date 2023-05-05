export function whatsMyType<T>( argument:T ) :T {
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumber= whatsMyType<number>(199);
let amIArray= whatsMyType<number[]>([2,2,3,2]);

console.log( amIString.split(''),amINumber.toFixed(),amIArray.join('-'))