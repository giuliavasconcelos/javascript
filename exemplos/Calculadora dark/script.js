// Seleciona o elemento HTML com o id 'inputbox' e armazena em 'input'
let input = document.getElementById('inputBox');

//Seleciona todos os elemntos HTML do tipo 'button' e armazena em 'buttons'
let buttons = document.querySelectorAll('button');

//Incia uma string vazia para armazenar a entrada do usuario
let string = "";

// Converte a coleção de botões em um array para conseguir percorrer sobre eles
let arr = Array.from(buttons);

// 
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } 
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})