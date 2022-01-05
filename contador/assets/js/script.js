var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0
var incrementBtn = document.getElementsByName('adicionar')[0];
var decrementBtn = document.getElementsByName('subtrair')[0];

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)

function increment(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = ''
    }
}

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
    }

}