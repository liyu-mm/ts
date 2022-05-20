
(()=>{
    interface IPerson{
        //id是只读属性
        readonly id:number
        name:string
        age:number
        //?可有可无
        sex?:string
        
    }
    const person: IPerson={
        id:1,
        name:"zkr",
        age:18,
        // sex:"男"
    }
    
    console.log(person);
})()

