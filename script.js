const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const regMsg = document.getElementById("regMsg");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (nameInput.value === "" || mailInput.value === "") {
        regMsg.textContent = "Kļūda";
        regMsg.style.color = "red";
    } else {
        regMsg.textContent = "OK";
        regMsg.style.color = "lime";
    }
});


const prices = {
    carrot: 1,
    potato: 2,
    apple: 3
};

const carrot = document.getElementById("carrot");
const potato = document.getElementById("potato");
const apple = document.getElementById("apple");
const totalDiv = document.getElementById("total");
const calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", function () {

    let total =
        carrot.value * prices.carrot +
        potato.value * prices.potato +
        apple.value * prices.apple;

    let discount = 0;

    if (total >= 20) discount = 0.2;
    else if (total >= 10) discount = 0.1;

    total -= total * discount;

    totalDiv.textContent =
        `Summa: ${total.toFixed(2)} € (${discount * 100}% atlaide)`;
});

