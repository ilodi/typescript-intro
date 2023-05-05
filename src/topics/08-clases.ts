export class Person {
   // public name?: string;
  //  private address?: string;

    constructor(
        public name:string, 
        public address: string
        ) {
        //this.name = name;
        //this.address = address;
    }
}

// export class Hero extends Person {
//      constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//      ){
//         super(realName, 'New York')
//     }
// }

//priorizar composición
export class Hero  {
    
    //public person: Person;

    constructor(
       public alterEgo: string,
       public age: number,
       public realName: string,
       public person:Person,
    ){
      //this.person = new Person(realName, 'ny');
   }
}

const tony = new Person('Tony Stark', 'N Y');

const ironMan = new Hero('Iron-man', 45, 'Tony', tony );

console.log(ironMan)