function somaNumeros(array){
    return array.reduce(function(prev, current){
        return prev + current;;
    });
}

const arrayQualquer = [1, 2, 2];

console.log(somaNumeros(arrayQualquer));