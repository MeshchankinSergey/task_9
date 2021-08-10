let duplicateField = document.querySelector("#duplicateField");

let field = document.querySelector("#field");

function updateText() {
	duplicateField.textContent=field.value;
};

let sendTextButton = document.querySelector("#sendTextButton");

sendTextButton.onclick = function (e) {
    e.preventDefault();
    console.log(field.value);
    field.value = "";
    duplicateField.textContent=field.value;
};
