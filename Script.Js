
// JavaScript for Product Card Hover Effect
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
