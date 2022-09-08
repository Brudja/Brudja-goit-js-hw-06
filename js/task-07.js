// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const sizeControl = document.querySelector("#font-size-control");

  const elSpan = document.querySelector("#text");

  sizeControl.addEventListener("input", (event) => {
    elSpan.style.fontSize = `${event.currentTarget.value}px`;
    console.log(sizeControl.value);
  });