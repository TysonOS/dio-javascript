const h1 = document.getElementById('page-title');
const btn = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
let darkmode = false;

btn.addEventListener('click', mudaModo);

function mudaModo(){
    darkmode = !darkmode;
    toggleClass();
    mudaTexto();
}

function toggleClass(){
    h1.classList.toggle('dark-mode');
    btn.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

}

function mudaTexto(){
    
    if(darkmode){
        h1.innerHTML = "Dark Mode ON"
    } else{
        h1.innerHTML ="Light Mode ON"
    }
}