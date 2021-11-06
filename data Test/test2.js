/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  const uniqueSet = new Set(data);
  const backToArray = [...uniqueSet];
  return backToArray.sort();
  /*const newArray = data.filter((item, index) => data.indexOf(item)*/
}

console.log(result(data));
