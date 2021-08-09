let text = document.querySelector('.text');

text.onclick = function (e) {
    e.preventDefault();
    text.textContent = prompt ("введите текст")
};

