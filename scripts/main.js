document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Проверяем сохранённое состояние тем
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Загружаем текущую тему
    if (prefersDarkScheme || (!savedTheme && !body.classList.contains('dark-mode'))) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Логика переключения тем
    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Загрузка карточек (пример)
    const cardsContainer = document.querySelector('.cards-container');
    const cards = [
        { id: 1, title: 'Sound Wave 1', description: 'Analyze frequencies' },
        { id: 2, title: 'Sound Wave 2', description: 'Visualize noise' },
        { id: 3, title: 'Sound Wave 3', description: 'Explore silence' }
    ];

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        `;
        cardsContainer.appendChild(cardElement);
    });

    // Скрываем анимацию загрузки после загрузки карточек
    const skeletonLoader = document.querySelector('.skeleton-loader');
    if (skeletonLoader) {
        setTimeout(() => {
            skeletonLoader.style.display = 'none';
        }, 1000);
    }
});