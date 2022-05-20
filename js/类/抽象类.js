(() => {
    class Animal {
        // abstract eat(){
        //     console.log("趴着吃，跳着吃");
        // }
        sayHi() {
            console.log("您好呀");
        }
    }
    class Dog extends Animal {
        eat() {
            console.log("舔着吃，真好吃");
        }
    }
    const dog = new Dog();
    dog.eat();
    dog.sayHi();
})();
