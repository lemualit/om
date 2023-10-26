let btnOb = document.querySelector('.btnOb')
let nav_link = documen.querySelector('.nav')

function changeClass() {
    nav_link.classList.remove("nav"); // Удаляем текущий класс
    nav_link.classList.add("nav_link_zero"); // Добавляем новый класс
}

myButton.addEventListener("click", changeClass());