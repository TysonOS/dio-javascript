function filtraPares(array){
    return array.filter(item => {
        if (item % 2 === 0){
            return item;
        }
    });
};

const arrayQualquer = [1, 2, 6, 8, 10, 15, 14, 20, 21, 23, 25];

console.log(filtraPares(arrayQualquer));