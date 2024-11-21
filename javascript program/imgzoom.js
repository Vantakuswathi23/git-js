document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('zoomableImage');
    const zoomInButton = document.getElementById('zoomIn');
    const zoomOutButton = document.getElementById('zoomOut');

    let scale = 1; 
    zoomInButton.addEventListener('click', function() {
        scale += 0.1;  
        image.style.transform = `scale(${scale})`; 

        
        if (scale > 1) {
            zoomOutButton.disabled = false; 
        }
    });


    zoomOutButton.addEventListener('click', function() {
        if (scale > 1) {  
            scale -= 0.1; 
            image.style.transform = `scale(${scale})`; 
        }

        if (scale <= 1) {
            zoomOutButton.disabled = true; 
        }
    });
});
