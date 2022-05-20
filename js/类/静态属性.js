(() => {
    class Person {
        constructor() {
            // this.name1 = name
        }
        static sayHi() {
            console.log("zkrr");
        }
    }
    Person.name1 = "小甜甜";
    const person = new Person();
    // console.log(person.name1);
    // person.sayHi()
    console.log(Person.name1);
    Person.sayHi();
    Person.name1 = "佐助";
    console.log(Person.name1);
})();
