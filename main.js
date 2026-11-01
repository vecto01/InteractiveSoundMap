document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after map container is loaded
    function hideLoader() {
        const loader = document.querySelector('.skeleton-loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }
    
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.addEventListener('load', hideLoader);
    }
    
    // Toggle dark theme
    const body = document.body;
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Dark Mode';
    themeToggle.className = 'btn dark-theme-toggle';
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '1rem';
    themeToggle.style.right = '1rem';
    themeToggle.style.zIndex = '1000';
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        this.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
    });
    
    body.appendChild(themeToggle);
    
    // Simulate dynamic content loading (for demo purposes)
    function loadCards() {
        const cardsContainer = document.querySelector('.cards');
        if (!cardsContainer) return;
        
        // Example cards (replace with real data)
        const cards = [
            {
                title: 'City sounds at night',
                description: 'Urban ambiance with distant traffic and distant chatter.',
                image: 'https://via.placeholder.com/150' // Placeholder
            },
            {
                title: 'Forest sounds',
                description: 'Nature sounds with birds and rustling leaves.',
                image: 'https://via.placeholder.com/150'
            },
            {
                title: 'Ocean waves',
                description: 'Calming waves and distant shoreline sounds.',
                image: 'https://via.placeholder.com/150'
            }
        ];
        
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `<img src="${card.image}" alt="${card.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-bottom: 0.5rem;">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        `;
            cardsContainer.appendChild(cardElement);
        });
    }
    
    loadCards();
});