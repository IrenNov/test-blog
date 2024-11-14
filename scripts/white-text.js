const colorCards = document.querySelectorAll('.article-other__item:nth-child(5n+2)');

colorCards.forEach(card => {
    card.classList.add('white-text'); 
  });

colorCards.addEventListener('mouseenter', () => {
  colorCards.classList.remove('white-text');
});

colorCards.addEventListener('mouseleave', () => {
  colorCards.classList.add('white-text');
});