(() => {
    class Person {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHi(str) {
            console.log(`我是：${this.name},${str}`);
        }
    }
    class Student extends Person {
        constructor(name, age, gender) {
            super(name, age, gender);
        }
        sayHi() {
            console.log("我是学生类中的sayHi方法");
            super.sayHi("哈哈");
        }
    }
    const person = new Person("大明明", 80, "男");
    person.sayHi("嘎嘎");
    const stu = new Student("小甜甜", 16, "女");
    stu.sayHi();
})();
