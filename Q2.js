const ages = [19, 22, 19, 20, 25, 26, 24, 25, 24];
//sort the array and find the main and max age

console.log(Math.max(...ages));

console.log(Math.min(...ages));


//Find the median age (one middle item or two middle itemas divided by two)
ages.sort((a, b) => a - b);
console.log(ages);

let median;

  if(ages.length % 2 == 1) {
    var findFloor = ages.length/2;
    findIndex = Math.floor(findFloor);
    median =ages[findIndex];
  } else {
    var findIndex = ages.length/2;
    median = ages[findIndex];
  }
console.log(median);

//avergae of all
var totalAge = 0;

// for(i = 0; i < ages.length; i++) {
//        //console.log(ages[i]);
//        totalAge += ages[i];
// }
// console.log(totalAge);

// averageAge = totalAge / ages.length;
// console.log(averageAge);

//with forEach

ages.forEach((age, idx) => {
  totalAge += age;
})
console.log(totalAge);
averageAge = totalAge / ages.length;
console.log(averageAge);

//find the range of ages

var minAge = Math.min(...ages);
console.log(minAge);
var maxAge = Math.max(...ages);
console.log(maxAge);
console.log(maxAge - minAge);

//comparing with abs()

var compare = Math.abs(maxAge, minAge);
console.log(compare);