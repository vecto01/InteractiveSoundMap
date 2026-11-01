document.addEventListener('DOMContentLoaded', () => {
  const skeletonLoader = document.querySelector('.skeleton-loader');
  const mapContainer = document.querySelector('.map-container');

  mapContainer.addEventListener('load', () => {
    skeletonLoader.style.display = 'none';
    animateCards();
  });

  function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.addEventListener('transitionend', () => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  }

  function filterCards(card) {
    document.querySelectorAll('.filter-card').forEach(fc => {
      fc.classList.remove('active');
    });
    card.classList.add('active');
  }
});