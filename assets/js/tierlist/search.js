export const tierListSearch = document.querySelector('.tier-list__search-input');

tierListSearch.addEventListener('input', () => {
    const items = document.querySelectorAll('.items-container__item')
    const value = tierListSearch.value;

    if (tierListSearch.value === '') {
        items.forEach(item => {
            item.style.display = 'block';
        })
    } else {
        Array
        .from(items).filter(item => item.children[1].textContent.substring(0, value.length) !== value)
        .forEach(item => item.style.display = 'none')
    }
})