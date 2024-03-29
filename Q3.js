let object1 = {price: 10000};
Object.preventExtensions(object1); 

console.log(object1["price"]);
object1["price"] = 5;
console.log(object1);