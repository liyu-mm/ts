(()=>{
    interface IFly{
        fly()
    }
    class Person implements IFly{
        fly() {
            console.log("我会飞啦，我是超人");  
        }
       
    }
     const person = new Person()
     person.fly
     interface ISwim{
         swim()
     }
     class Person2 implements IFly,ISwim{
         fly() {
             console.log("我会飞啦2");
             
         }
         swim(){
             console.log("我会游泳啦");
             
         }
     }
     const person2 = new Person2()
     person2.fly()
     person2.swim()
     interface IMyFlyAndSwim extends IFly,ISwim{}
     class Person3 implements IMyFlyAndSwim{
         fly() {
             console.log("我飞了3");
             
         }
         swim() {
             console.log("我会游泳3");
             
         }
     }
     const person3 = new Person3()
     person3.fly()
     person3.swim()
})()
