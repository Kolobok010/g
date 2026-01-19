console.log("JS pieslēgts un darbojas");

// Atlasām elementus
const text = document.getElementById("text");
const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let newElement = null;

// input notikums – maina tekstu
input.addEventListener("input", function () {
    text.textContent = "Sveiki, " + this.value + "!";
    text.style.color = "blue";
});

// click notikums – izveido jaunu elementu
addBtn.addEventListener("click", function () {
    if (!newElement) {
        newElement = document.createElement("p");
        newElement.textContent = "Šis ir dinamiski pievienots elements.";
        newElement.style.color = "green";
        document.querySelector("main").appendChild(newElement);
    }
});

// click notikums – noņem elementu
removeBtn.addEventListener("click", function () {
    if (newElement) {
        newElement.remove();
        newElement = null;
    }
});
