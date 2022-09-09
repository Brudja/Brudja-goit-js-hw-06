// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const elInput = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

elInput.addEventListener("input", onInputChange);

const defText = nameLabel.textContent;

function onInputChange(event){
    nameLabel.textContent = event.currentTarget.value.trim();
    if(nameLabel.textContent === ""){
        nameLabel.textContent = defText  
        };
    }
