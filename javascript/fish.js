function toggleMedia(imageElement, videoSrc) {
    // Create a video element
    var videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.className = 'card-img-top';

    // Replace the image with the video element
    imageElement.replaceWith(videoElement);

    // Add an event listener to replace the video with the image when the video ends
    videoElement.addEventListener('ended', function() {
        videoElement.replaceWith(imageElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const initialImage = document.getElementById('initial-image');
    const replacementImage = document.getElementById('replacement-image');

    initialImage.addEventListener('click', () => {
        alert("Gamble today is your lucky day");
        initialImage.style.display = 'none';
        replacementImage.style.display = 'block';
    });
});