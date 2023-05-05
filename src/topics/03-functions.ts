function addNumber(a: number, b: number){
    return a + b
}

const addNumbersArrow = (a:number,b:number):string =>{
    return `${a+b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}

const res: number = addNumber(1,2);
const arrowRes: number = addNumbersArrow(1,3)
const multiplyRes: number = multiply(5);

//console.log({res, arrowRes, multiplyRes})
//console.log(res)

interface Character {
    name: string;
    hp: number;
    showHp: () => void
}

const healCharacter = ( character: Character, amount: number ) =>{
    return character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider,10);
healCharacter(strider,100);

strider.showHp();



export {}