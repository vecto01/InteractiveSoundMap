document.addEventListener('DOMContentLoaded', function() {
    // Элементы интерфейса
    const loadingScreen = document.getElementById('loading-screen');
    const readyScreen = document.getElementById('ready-screen');
    const mapContent = document.querySelector('.map-content');
    
    // Показываем загрузку
    setTimeout(() => {
        loadingScreen.classList.add('active');
        readyScreen.style.display = 'none';
        mapContent.style.opacity = '0';
    }, 1000);
    
    // Завершение загрузки
    setTimeout(() => {
        loadingScreen.classList.remove('active');
        setTimeout(() => {
            mapContent.style.opacity = '1';
            readyScreen.style.display = 'block';
        }, 300);
    }, 3000);
    
    // Плавный переход для кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
        button.addEventListener('click', () => {
            button.style.backgroundColor = '#3A7D3A';
            setTimeout(() => {
                button.style.backgroundColor = '#4CAF50';
            }, 200);
        });
    });
    
    // Анимация слайдера
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseover', () => {
        slider.style.background = '#333';
    });
    slider.addEventListener('mouseout', () => {
        slider.style.background = '#424242';
    });
});