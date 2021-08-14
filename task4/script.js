let text = document.querySelector('.text');

text.addEventListener ('click', function (e) {
    e.preventDefault();
    text.textContent = prompt ("введите текст")
});

