import { tierListSearch } from "./search.js";
import { AllItems,  itemsContainer, appendItems } from "./items.js";
import { clearContainers } from "./clearContainers.js";

const categories = document.querySelectorAll('.items-container-settings__categories p');

categories.forEach(c => {
	c.addEventListener('click', () => {
		categories.forEach(c => c.classList.remove('items-container__categorie--active'))

		c.classList.add('items-container__categorie--active');
		changeCategory(c.dataset.id)
	})
})

function changeCategory(categoryId) {
	itemsContainer.innerHTML = '';
	tierListSearch.value = '';
	appendItems(AllItems[categoryId])
	clearContainers()
}