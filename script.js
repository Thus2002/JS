const colorInput = document.getElementById('colorInput');
const colorPreview = document.getElementById('colorPreview');

colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    colorPreview.style.backgroundColor = selectedColor;
});
