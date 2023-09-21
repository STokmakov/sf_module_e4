const object = {a: 10, b: 50, c: 100};
function showValue(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // проверяем является ли свойство собственным
        console.log(key, obj[key]); // выводим в консоль если свойство неунаследовано
    }
  }
}
showValue(object);
    
    


