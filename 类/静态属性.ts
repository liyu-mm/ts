(()=>{
    class Person{
        static name1:string = "小甜甜"
        constructor(){
            // this.name1 = name
        }
        static sayHi(){
            console.log("zkrr");
            
        }
    }
    const person: Person = new Person()
    // console.log(person.name1);
    // person.sayHi()
    console.log(Person.name1);
    Person.sayHi()
    Person.name1="佐助"
    console.log(Person.name1);
    
    
})()