import { itemsContainer } from "./items.js";

export function deleteItem(item) {
		itemsContainer.prepend(item);
}