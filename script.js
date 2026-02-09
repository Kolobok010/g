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
        errorMsg.textContent = "Nepareizs e-pasts!";
    }
    else if (nameValue.length < 2) {
        event.preventDefault();
        errorMsg.textContent = "Vārds pārāk īss!";
    }
    else {
        alert("Forma veiksmīgi iesniegta!");
    }
});


const pricePerItem = 10;

const discounts = [
    { min: 10, discount: 0.20 },
    { min: 5, discount: 0.10 }
];

const quantityInput = document.getElementById("quantity");
const button = document.getElementById("calcBtn");
const result = document.getElementById("result");

function calculatePrice() {
    const quantity = Number(quantityInput.value);

    if (!quantity || quantity <= 0) {
        result.textContent = "Ievadi derīgu daudzumu!";
        result.style.color = "red";
        return;
    }

    let total = quantity * pricePerItem;
    let appliedDiscount = 0;

    for (let d of discounts) {
        if (quantity >= d.min) {
            appliedDiscount = d.discount;
            break;
        }
    }

    total = total - (total * appliedDiscount);

    result.style.color = "green";
    result.textContent =
        `Kopējā cena: ${total.toFixed(2)} € (atlaide ${appliedDiscount * 100}%)`;
}

button.addEventListener("click", calculatePrice);

