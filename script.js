let containerEl = document.getElementById("cartrow");
containerEl.classList.add("d-flex", "flex-column", "justify-content-center", "text-center");

let headingEl = document.createElement("h1");
headingEl.textContent = "Add To Cart";
containerEl.appendChild(headingEl);

let inputContainerEl = document.createElement("div");
inputContainerEl.classList.add("d-flex", "flex-row", "justify-content-center", "pt-3");
containerEl.appendChild(inputContainerEl);

let inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.id = "cartItemTextInput";
inputContainerEl.appendChild(inputEl);

let paraEl = document.createElement("p");
paraEl.textContent = "My Cart Items";
paraEl.classList.add("pt-4");
containerEl.appendChild(paraEl);

let cartItemContainer = document.createElement("div");
cartItemContainer.classList.add("text-center");
containerEl.appendChild(cartItemContainer);

function createAndAppenditem(item) {

    let cartEl = document.createElement("li");
    cartEl.textContent = item;
    cartItemContainer.appendChild(cartEl);
}

function onAdd() {
    let inputValueEl = document.getElementById("cartItemTextInput");
    let item = inputValueEl.value;
    createAndAppenditem(item);
    inputValueEl.value = "";

}
let btnEl = document.createElement("button");
btnEl.id = "addBtn";
btnEl.classList.add("btn", "btn-primary", "ml-4");
btnEl.textContent = "Add";
btnEl.onclick = function() {
    onAdd();
}
inputContainerEl.appendChild(btnEl);
