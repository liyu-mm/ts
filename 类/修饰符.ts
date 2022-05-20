(()=>{
    class Person{
        protected name:string
        public constructor(name:string){
            this.name=name
        }
       eat(){
            console.log("嗯，这个骨头好吃",this.name);
            
        }
    }
    class Person1 extends Person{
        eat(){
            console.log("嗯，这个骨头好吃",this.name);
            
        }
    }
    console.log(Person.name);
    
    const person = new Person("大明")
    // console.log(person.name);
    // const person1 = new Person1("大明")
    // console.log(person1.name);
    
})()