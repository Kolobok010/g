const text = document.getElementById("text");
const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let newElement = null;

function updateText(value) {
    if (value === "") {
        text.textContent = "";
    } else {
        text.textContent = "Sveiki, " + value + "!";
    }
}

input.addEventListener("input", function () {
    updateText(this.value);
});

addBtn.addEventListener("click", function () {
    if (!newElement) {
        newElement = document.createElement("p");
        newElement.textContent = "Elements";
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
        errorMsg.textContent = "Kļūda";
    }
});


const pricePerItem = 50;

const discounts = [
    { min: 20, discount: 0.30 },
    { min: 10, discount: 0.20 },
    { min: 5, discount: 0.10 }
];

const quantityInput = document.getElementById("quantity");
const button = document.getElementById("calcBtn");
const result = document.getElementById("result");

function calculatePrice() {

    const quantity = Number(quantityInput.value);

    if (!quantity || quantity <= 0) {
        result.textContent = "Kļūda";
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

    total -= total * appliedDiscount;

    result.textContent =
        `${total.toFixed(2)} € (${appliedDiscount * 100}%)`;
}

button.addEventListener("click", calculatePrice);

