// objetos
const maca = {
    value : 2,
};

const pera = {
    value : 3
}

// array
const arrayNum = [1, 2];
function mapComThis (array, thisArg){
    return array.map(function(item){
       return item * this.value;
    }, thisArg);
} 

console.log("this -> Maçã:" + mapComThis(arrayNum, maca ))
console.log("this-> Pera:" + mapComThis(arrayNum, pera))