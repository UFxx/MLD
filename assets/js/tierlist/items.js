import { Heroes, Items, Spells } from "../storage.js";

const AllItems = [Heroes, Items, Spells];
const itemsContainer = document.querySelector('.items-container__items')
const categories = document.querySelectorAll('.items-container-settings__categories p');

function appendItems (arr) {
    arr.forEach(item => {
        if (!Boolean(item.name[localStorage.getItem('language')])) {
            return
        }

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('items-container__item');

        const itemImg = document.createElement('img');
        itemImg.src = item.img;
        itemImg.alt = item.name;
        itemContainer.appendChild(itemImg)

        const itemName = document.createElement('p');
        itemName.innerHTML = item.name[localStorage.getItem('language')];
        itemContainer.appendChild(itemName);

        itemsContainer.appendChild(itemContainer)
    })
}

appendItems(Heroes)

categories.forEach(c => {
    c.addEventListener('click', () => {
        categories.forEach(c => c.classList.remove('items-container__categorie--active'))

        c.classList.add('items-container__categorie--active');
        changeCategory(Number(c.dataset.id))
    })
})

function changeCategory(categoryId) {
    itemsContainer.innerHTML = '';

    appendItems(AllItems[categoryId])
}