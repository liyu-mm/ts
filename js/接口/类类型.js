(() => {
    class Person {
        fly() {
            console.log("我会飞啦，我是超人");
        }
    }
    const person = new Person();
    person.fly;
    class Person2 {
        fly() {
            console.log("我会飞啦2");
        }
        swim() {
            console.log("我会游泳啦");
        }
    }
    const person2 = new Person2();
    person2.fly();
    person2.swim();
    class Person3 {
        fly() {
            console.log("我飞了3");
        }
        swim() {
            console.log("我会游泳3");
        }
    }
    const person3 = new Person3();
    person3.fly();
    person3.swim();
})();
