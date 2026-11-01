document.addEventListener('DOMContentLoaded', function() {
    const loadingSpinner = document.querySelector('.loading-spinner');
    const progressBar = document.getElementById('progress-bar');
    const mapContainer = document.querySelector('.map-container');
    const controlsContainer = document.querySelector('.controls-container');

    // Имитация загрузки карты и панели с анимацией прогресса
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            loadingSpinner.classList.add('fade-out');
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                mapContainer.style.opacity = '1';
                controlsContainer.classList.add('loaded');
            }, 500);
        }
    }, 100);

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