document.addEventListener('DOMContentLoaded', function() {
    const loadingSpinner = document.getElementById('loading-spinner');
    const interactiveExample = document.querySelector('.interactive-example');
    const playExample = document.getElementById('play-example');
    
    // Показываем спиннер при загрузке
    function showLoading() {
        loadingSpinner.style.display = 'flex';
    }
    
    // Имитация загрузки карты
    setTimeout(() => {
        showLoading();
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            
            // Показываем интерактивный пример
            interactiveExample.style.animation = 'fadeIn 0.5s ease forwards';
            interactiveExample.style.opacity = '1';
            
            // Добавляем обработку клика на кнопку
            playExample.addEventListener('click', function() {
                alert('Playing example sound!');
            });
        }, 2000);
    }, 500);
    
    // Тема переключение
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.querySelector('.current-theme').textContent;
        
        if (currentTheme === 'Dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.setAttribute('aria-label', 'Toggle dark mode');
            document.querySelector('.current-theme').textContent = 'Light';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.setAttribute('aria-label', 'Toggle light/dark mode');
            document.querySelector('.current-theme').textContent = 'Dark';
        }
    });
    
    // Адаптивность для controls
    const controls = document.querySelector('.controls');
    const scrolled = document.querySelector('.controls.scrolled');
    
    window.addEventListener('scroll', function() {
        if (window.innerHeight * (window.scrollY + 1) >= document.body.offsetHeight) {
            controls.classList.add('scrolled');
        } else {
            controls.classList.remove('scrolled');
        }
    });
    
    // Проверка адаптивности на разных устройствах
    function checkDeviceOrientation() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            console.log('Mobile view');
        } else if (window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches) {
            console.log('Laptop view');
        } else {
            console.log('Desktop view');
        }
    }
    
    checkDeviceOrientation();
})