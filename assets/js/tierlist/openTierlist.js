const tierListContainer = document.querySelector('.tier-list-container');
const openTierListBtn = document.querySelector('.fa-th-list');
const tierListCategories = tierListContainer.querySelectorAll('.tier-list__categorie');

openTierListBtn.addEventListener('click', () => {
    tierListContainer.scrollIntoView({behavior: "smooth"});

    tierListCategories.forEach(c => {
        const categorieLetter = c.querySelector('.tier-list__categorie-letter');

        categorieLetter.children[0].style.color = categorieLetter.dataset.color;
        categorieLetter.style.borderRight = `1px solid ${categorieLetter.dataset.color}`;
    })

    document.title = 'MLRanker';

    if (window.scrollX > 0) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        document.title = 'MLDrafter';
    }
})