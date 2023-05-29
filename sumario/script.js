  const caixa =[
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

 const menuItems = document.querySelector('.menu-items');
const buttonContainer = document.querySelector('.button-container');

window.addEventListener("DOMContentLoaded", () => { })
    displayMenuButtons()

function displayMenuButtons() {
    const categories = menu.reduce((value, item) => {
        if (!value.includes(item.category)) {
            value.push(item.category)
        }

        return value;
    }, ["all"]);

    const categoryButtons = categories.map((category) => {
        return `
        <button class="filter-button" data-id="${category}">${category}</button>
        `
    }).join("");

    buttonContainer.innerHTML += categoryButtons;
}


  