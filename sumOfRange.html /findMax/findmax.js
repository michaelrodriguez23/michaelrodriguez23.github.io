var testArray = [17,42,20];
var findMax = 0;
// var findMax = testArray.length();
let arrayIndex = [0]
  for(arrayIndex = 0; arrayIndex<testArray.length; arrayIndex ++) {
    if (findMax<arrayIndex){
    findMax = testArray[arrayIndex]
  }
}
console.log(findMax);
