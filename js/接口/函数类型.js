const searchString = function (source, subString) {
    return source.search(subString) > -1;
};
console.log(searchString("哈哈，我又变瘦瘦了", "瘦"));
