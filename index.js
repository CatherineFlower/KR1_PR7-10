// Замена изображений при ошибке загрузки
document.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
        img.src = "images/error.png";
        img.alt = "Изображение недоступно";
    };
});
