document.addEventListener('DOMContentLoaded', function() {
    const loadingSpinner = document.querySelector('.loading-spinner');
    const mapContainer = document.querySelector('.map-container');
    const controlsContainer = document.querySelector('.controls-container');

    // Имитация загрузки карты и панели
    setTimeout(() => {
        loadingSpinner.classList.add('fade-out');
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            mapContainer.style.opacity = '1';
            controlsContainer.classList.add('loaded');
        }, 500);
    }, 1500);

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