document.querySelectorAll('[data-card]').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.parentElement;
        const newCard = document.createElementElement('article');
        newCard.classList.add('block__main__section__article--card');
        newCard.textContent = 'Novo card';
        section.insertBefore(newCard, button);
    });
});