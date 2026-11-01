document.addEventListener('DOMContentLoaded', function() {
    const loadingSpinner = document.querySelector('.loading-spinner');
    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'Loading...';
    
    const readyMessage = document.querySelector('.map-text.ready-message');
    const mapContainer = document.querySelector('.map-container');
    const controlsContainer = document.querySelector('.controls-container');
    const footer = document.querySelector('.footer');

    // Добавим индикатор загрузки в DOM
    document.querySelector('.controls-container').prepend(loadingSpinner);
    document.querySelector('.controls-container').prepend(loadingText);

    // Имитация загрузки карты и панели с анимацией прогресса
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            loadingSpinner.style.display = 'none';
            loadingText.style.opacity = '0';
            setTimeout(() => {
                loadingText.remove();
                mapContainer.style.opacity = '1';
                controlsContainer.classList.add('loaded');
                readyMessage.style.opacity = '1';
                readyMessage.style.transform = 'translateY(0)';
                readyMessage.style.animation = 'fadeInReady 0.5s ease forwards';
            }, 500);
        }
    }, 100);

    // Анимация для футера при достижении конца страницы
    window.addEventListener('scroll', function() {
        const footerHeight = footer.offsetHeight;
        const windowHeight = window.innerHeight;
        const footerPosition = document.body.offsetHeight - footerHeight;
        
        if (window.scrollY >= footerPosition - windowHeight) {
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
            footer.style.animation = 'fadeInFooter 0.5s ease forwards';
        }
    });

    // Логика обработки интенсивности
    const slider = document.getElementById('intensity');
    slider.addEventListener('input', function() {
        console.log('Intensity:', this.value);
    });

    // Логика кнопки Play Example
    const playButton = document.getElementById('play-example');
    playButton.addEventListener('click', function() {
        alert('Play example clicked!');
    });
});