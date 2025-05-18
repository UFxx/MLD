const allItemsContainer = document.querySelector('.tier-list__items-container');
const toggleAllItemsContainerBtn = document.querySelector('.tier-list__items-container--toggle')

toggleAllItemsContainerBtn.addEventListener('click', () => {
    allItemsContainer.classList.toggle('tier-list__items-container--hidden');
    toggleAllItemsContainerBtn.classList.toggle('items-container--hidden')
})