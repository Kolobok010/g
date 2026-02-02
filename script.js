console.log("JS pieslēgts un darbojas");

const text = document.getElementById("text");
const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let newElement = null;

function parbauditUnParadiTekstu(vards) {
    if (vards === "") {
        text.textContent = "Lūdzu, ievadi savu vārdu!";
        text.style.color = "red";
    } else {
        text.textContent = "Sveiki, " + vards + "!";
        text.style.color = "blue";
    }
}

input.addEventListener("input", function () {
    parbauditUnParadiTekstu(this.value);
});

addBtn.addEventListener("click", function () {
    if (!newElement) {
        newElement = document.createElement("p");
        newElement.textContent = "Šis ir dinamiski pievienots elements.";
        newElement.style.color = "green";
        document.querySelector("main").appendChild(newElement);
    }
});

removeBtn.addEventListener("click", function () {
    if (newElement) {
        newElement.remove();
        newElement = null;
    }
});

const form = document.getElementById("myForm");
const formName = document.getElementById("formName");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", function (event) {

    let nameValue = formName.value.trim();
    let emailValue = email.value.trim();

    errorMsg.textContent = "";

    if (nameValue === "" || emailValue === "") {
        event.preventDefault();
        errorMsg.textContent = "Visi lauki jāaizpilda!";
    }
    else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        event.preventDefault();
        errorMsg.textContent = "Nepareizs e-pasta formāts!";
    }
    else if (nameValue.length < 2) {
        event.preventDefault();
        errorMsg.textContent = "Vārdam jābūt vismaz 2 simboliem!";
    }
    else {
        alert("Forma veiksmīgi iesniegta!");
    }
});

