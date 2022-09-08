// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;

const counterRef = document.querySelector("#counter");
const spanRef = counterRef.querySelector("#value")

const handleClick = (event) => {
    console.log(event.target.dataset.action);
    const target = event.target.dataset.action;

    if(target === "decrement"){
        counterValue -= 1;
    }else{
        counterValue += 1;
    }
    spanRef.textContent = counterValue;
};

counterRef.addEventListener("click", handleClick);

document.addEventListener("keydown", event => {
    console.log("key: ", event.key);
    console.log("code: ", event.code);
  });