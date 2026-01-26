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
