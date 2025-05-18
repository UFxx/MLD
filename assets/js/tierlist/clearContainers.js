import { itemsContainer } from "./items.js";

const tiersContainers = document.querySelectorAll('.tier-list__categorie-content');
const clearContainerBtns = document.querySelectorAll('.tier-list__categorie-content-settings i');

export function clearContainers() {
	tiersContainers.forEach(container => {
		clearContainer(container);
	})
}

export function clearContainer(container) {
	container.innerHTML = '';
}

clearContainerBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const container = e.target.closest('.tier-list__categorie').children[1];

		container.childNodes.forEach(item => {
			itemsContainer.appendChild(item)
		})

		clearContainer(container);
	})
})