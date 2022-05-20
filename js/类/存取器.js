(() => {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName() {
            console.log("get中...");
            return this.firstName + "_" + this.lastName;
        }
        set fullName(val) {
            console.log("set中...");
            let names = val.split("_");
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
    const person = new Person("东方", "不败");
    console.log(person);
    console.log(person.fullName);
    person.fullName = "诸葛_孔明";
    console.log(person.fullName);
})();
