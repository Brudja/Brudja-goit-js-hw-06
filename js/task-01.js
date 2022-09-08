


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).




const elList = document.querySelector('#categories').children;
console.log("Number of categories >>>", elList.length);

[...elList].forEach((item) => {
    const title = item.querySelector("h2").textContent;
    console.log("Category:", title);

    const innerList = item.querySelectorAll("li").length;
    console.log("Elements:", innerList)
});
