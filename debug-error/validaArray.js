let arrayQualquer = [10,20,34,5,6]

function validaArray(array, num){
    try{
        if(!array || !num){
            throw new ReferenceError("Parâmetros não enviados");
        } else if(typeof(array) !== 'object'){
            throw new TypeError("Necessário enviar um elemento do tipo Object");
        } else if(typeof(num) !== "number"){
            throw new TypeError("Necessário enviar um elemento do tipo Number")
        }else if(array.length !== num ){
            throw new RangeError ("Tamanho do array é diferente do número enviado")
        }
        return array;

    } catch(err){
        if(err instanceof ReferenceError){
            console.log('Este é um Reference Error');
            console.log(err.message);
        }else if(err instanceof TypeError){
            console.log('Este é um TypeError');
            console.log(err.message);
        } else if(err instanceof RangeError){
            console.log('Este é um RangeError');
            console.log(err.message);
        }else{
            console.log("Tipo de erro não esperado" + err)
        }
    }   
}

validaArray([6,2,3], 4);