//function

function times2(theArray) {
  let newArray = [];
  for (let i = 0; i < theArray.length; i++) {
    newArray.push(theArray[i] * 2);
  }
  return newArray;
}

console.log("Array Double :", times2([1, 2, 3, 4, 5]).toString());
//return Array Double : 2,4,6,8,10
