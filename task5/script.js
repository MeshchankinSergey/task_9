let duplicateField = document.querySelector("#duplicateField");

let field = document.querySelector("#field");

let sendTextButton = document.querySelector("#sendTextButton");

function updateText() {
	duplicateField.textContent=field.value;
};

field.addEventListener ('keyup', updateText);

function sendText (e) {
    e.preventDefault();
    console.log(field.value);
    field.value = "";
    duplicateField.textContent=field.value;
};

sendTextButton.addEventListener ('click', sendText);