function compararNumeros(num1, num2){
   const soma = (num1 + num2);
   const frase =  formarFrase(num1, num2, soma);
   return frase;
}

function formarFrase(num1,num2,soma){
    let iguais;
    let maiorMenorDez = comparaDez(soma);
    let maiorMenorVinte = comparaVinte(soma);

    if(num1 === num2){
        iguais = '';
    }else if (num1 !== num2){
        iguais = ' não';
    }
    
    return `Os números ${num1} e ${num2}${iguais} são iguais. Sua soma é ${soma}, que é ${maiorMenorDez} 10 e  ${maiorMenorVinte} 20.`;
}

function comparaDez(num){
    if (num > 10){
        return 'maior que';
    }else if (num < 10){
        return 'menor que';
    }else{
        return 'igual a';
    }

}

function comparaVinte(num){
    if (num > 20){
        return 'maior que';
    }else if (num < 20){
        return 'menor que';
    }else{
        return 'igual a';
    }

}

console.log(compararNumeros(16,16));