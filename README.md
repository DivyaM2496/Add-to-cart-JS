# 🛒 Add To Cart App

## 📌 Overview

The **Add To Cart App** is a beginner-friendly web application built using **JavaScript DOM manipulation**. It allows users to enter item names into an input field and dynamically add them to a cart list displayed on the page.

This project demonstrates how to **create HTML elements using JavaScript**, handle user input, and update the UI dynamically without page reloads.

---

## 🧩 Features

* Dynamic creation of UI elements using JavaScript
* Add cart items through an input field
* Display cart items instantly in a list
* Clean layout using Bootstrap utility classes

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)
* Bootstrap (for layout and styling)

---

## ⚙️ How It Works

* All elements (heading, input box, button, cart list) are created using JavaScript
* User types an item name into the input field
* Clicking the **Add** button:

  * Reads the input value
  * Creates a new list item (`li`)
  * Appends it to the cart list
  * Clears the input field

---

## 📂 Project Structure

```
add-to-cart-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function onAdd() {
  let item = inputEl.value;
  createAndAppenditem(item);
  inputEl.value = "";
}
```

---

## 📚 Concepts Covered

* `document.createElement()`
* `appendChild()`
* DOM event handling
* Reading input values
* Dynamic UI updates

---

## 🚀 Future Improvements

* Add delete/remove item option
* Prevent adding empty items
* Store cart items using localStorage

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
