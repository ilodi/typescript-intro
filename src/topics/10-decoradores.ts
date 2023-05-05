function classDecorator(constructor: any){
    return class extends constructor{
        newProperty = 'e';
    }
}

@classDecorator
export class SuperClass{
    public myProperty:  string = 'Abc-123'
    print(){
        console.log('Hola')
    }
}

console.log(SuperClass)

const myClass = new SuperClass();
console.log(myClass)