function mapSemThis (array){
    return array.map(function(item){
        return item * 2;
    });
}
const nums = [2, 4, 5, 10]
console.log(mapSemThis(nums));