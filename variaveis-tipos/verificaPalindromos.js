function verificaPalindromo(string){ 
    if (!string || typeof(string)!== 'string'){
        return "Digite uma frase ou palavra válida";
    }

        let expressao = string.toLowerCase().replace(/ /gi,"");
        let expressaoReverse = expressao.split("").reverse().join("");

        return expressao === expressaoReverse ? "É um palíndromo": "Não é um palidromo";
    
}
console.log(verificaPalindromo("Roma me tem amor"))