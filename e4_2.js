const object = {value1: 'red', value2: 'green', value3: 'blue'};
let color = 'red';


function searchValue(obj, col) {
  let entry = false
  for (let key in obj) {
    entry = entry || ((obj[key]) === col) ;
  }
  return entry;
}
searchValue(object, color);
    
    


