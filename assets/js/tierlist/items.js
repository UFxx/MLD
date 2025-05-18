import { Heroes, Items, Spells } from "../storage.js";
import { dragAndDropItems } from "./dragAndDrop.js";
import { deleteItem } from "./deleteItem.js";

export const AllItems = [Heroes, Items, Spells];
export const itemsContainer = document.querySelector('.items-container__items')

export function appendItems (arr) {
	arr.forEach(item => {
		if (!Boolean(item.name[localStorage.getItem('language')])) return

		const itemContainer = document.createElement('div');
		itemContainer.classList.add('items-container__item');
		itemContainer.draggable = true;
		itemContainer.addEventListener('click', () => deleteItem(itemContainer))

		const itemImg = document.createElement('img');
		itemImg.src = item.img;
		itemImg.alt = item.name;
		itemContainer.appendChild(itemImg)

		const itemName = document.createElement('p');
		itemName.innerHTML = item.name[localStorage.getItem('language')];
		itemContainer.appendChild(itemName);

		itemsContainer.appendChild(itemContainer)
	})

	const items = document.querySelectorAll('.items-container__item');
	dragAndDropItems(items);
}

appendItems(AllItems[getActiveCategoryId()])

export function getActiveCategoryId() {
	return document.querySelector('.items-container__categorie--active').dataset.id;
}