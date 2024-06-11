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
      
        initialImage.style.display = 'none';
        replacementImage.style.display = 'block';
    });
});

//Pixi Script
document.addEventListener('DOMContentLoaded', async () => {
    const imageElement = document.getElementById('image1');
    const imageSrc = imageElement.src;

    // Create a new application
    const app = new PIXI.Application({
        resizeTo: imageElement.parentElement,
        transparent: true
    });

    // Append the application canvas to the image's parent
    imageElement.parentElement.appendChild(app.view);

    // Hide the original image
    imageElement.style.display = 'none';

    // Load the image texture
    const texture = await PIXI.Texture.fromURL(imageSrc);

    // Create the sprite
    const sprite = new PIXI.Sprite(texture);
    sprite.width = app.screen.width;
    sprite.height = app.screen.height;
    app.stage.addChild(sprite);

    // Inner radius of the circle
    const radius = 70;

    // The blur amount
    const blurSize = 32;

    // Create the circle with blur filter
    const circle = new PIXI.Graphics();
    circle.beginFill(0xff0000);
    circle.drawCircle(radius + blurSize, radius + blurSize, radius);
    circle.endFill();

    circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

    const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
    const circleTexture = app.renderer.generateTexture(circle, {
        scaleMode: PIXI.SCALE_MODES.NEAREST,
        resolution: 1,
        region: bounds,
    });
    const focus = new PIXI.Sprite(circleTexture);

    app.stage.addChild(focus);

    sprite.mask = focus;

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('pointermove', (event) => {
        focus.position.x = event.global.x - focus.width / 2;
        focus.position.y = event.global.y - focus.height / 2;
    });
});
//Pixi Script End