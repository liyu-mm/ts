
interface ISearchFunc{
    (source:string,subString:string):boolean
}
const searchString:ISearchFunc = function(source:string,subString:string):boolean{
    return source.search(subString)>-1
}
console.log(searchString("哈哈，我又变瘦瘦了","瘦"));
