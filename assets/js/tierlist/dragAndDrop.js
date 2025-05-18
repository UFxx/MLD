const items = document.querySelectorAll('.items-container__item');

export function dragAndDropItems(arr) {
	arr.forEach(item => {
		item.addEventListener('dragstart', (e) => {
			let item = (e.target.nodeName === 'IMG' || e.target.nodeName === 'P') ? e.target.parentElement : e.target;
			item.children[0].classList.add('tier-list__item--active');
			document.body.style.cursor = 'grabbing';
		})

		item.addEventListener('dragend', (e) => {
			item.children[0].classList.remove('tier-list__item--active');
			document.body.style.cursor = '';

			const activeElement = e.currentTarget;
			const container = document.elementFromPoint(e.clientX, e.clientY);

			if (container.classList.contains('tier-list__categorie-content')) container.appendChild(activeElement);
		})
	})
}

dragAndDropItems(items);