(()=>{
   class Animal{
       name:string
       constructor(nume:string){
           this.name=nume
       }
       run(distance:number=0){
           console.log(`跑了${distance}米怎么远的距离`,this.name);  
       }
   }
   class Dog extends Animal{
       constructor(name:string){
           super(name)
       }
       run(distance:number=5){
        console.log(`跑了${distance}米怎么远的距离`,this.name);  
    }
   }
   class Pig extends Animal{
    constructor(name:string){
        super(name)
    }
    run(distance:number=10){
     console.log(`跑了${distance}米怎么远的距离`,this.name);  
 }
   }
   const ani:Animal = new Animal("动物")
   ani.run()
   const dog:Dog = new Dog("大黄")
   dog.run()
   const pig:Pig = new Pig("八戒")
   pig.run()
   const dog1:Animal = new Dog("小黄")
   dog1.run()   
   const pig1:Animal = new Pig("小猪")
   pig1.run()
   function showRun(ani:Animal){
       ani.run()
   }
   showRun(dog1)
   showRun(pig1)
})()