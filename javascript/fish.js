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