(() => {
    class Perrson {
        constructor(name = "小甜甜", age = 16, gender = "女") {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHi(str) {
            console.log(`大家好,我是${this.name},今年已经${this.age}岁啦,是个${this.gender}孩子`, str);
        }
    }
    const person = new Perrson('佐助', 18, "男");
    person.sayHi("你叫什么名字呀");
})();
