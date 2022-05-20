(() => {
    class Animal {
        constructor(nume) {
            this.name = nume;
        }
        run(distance = 0) {
            console.log(`跑了${distance}米怎么远的距离`, this.name);
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance = 5) {
            console.log(`跑了${distance}米怎么远的距离`, this.name);
        }
    }
    class Pig extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance = 10) {
            console.log(`跑了${distance}米怎么远的距离`, this.name);
        }
    }
    const ani = new Animal("动物");
    ani.run();
    const dog = new Dog("大黄");
    dog.run();
    const pig = new Pig("八戒");
    pig.run();
    const dog1 = new Dog("小黄");
    dog1.run();
    const pig1 = new Pig("小猪");
    pig1.run();
    function showRun(ani) {
        ani.run();
    }
    showRun(dog1);
    showRun(pig1);
})();
