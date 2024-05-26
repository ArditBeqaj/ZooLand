document.addEventListener("DOMContentLoaded", function() {
    const cheetahAnimation = document.querySelector('.cheetah-animation');
    const cheetahImg = document.querySelector('.cheetah-img');
    const content = document.querySelector('.content');
    const cardBody = document.querySelector('.card-body-cheetah');
    const cardTitle = document.querySelector('.cheetah');

    function moveImage() {
        cheetahAnimation.style.left = '800px';
    }

    cheetahAnimation.addEventListener('transitionend', () => {
        // When the transition ends, hide the cheetah animation and reset its position
        cheetahAnimation.style.visibility = 'hidden';
        cheetahAnimation.style.transition = 'none';
        cheetahAnimation.style.left = '0';

        // Force reflow to ensure the change in 'left' is applied immediately
        cheetahAnimation.offsetHeight;

        // Make the cheetah animation visible again and re-enable the transition
        cheetahAnimation.style.visibility = 'visible';
        cheetahAnimation.style.transition = 'left 1.5s linear';

        // Restart the animation after a brief delay
        setTimeout(moveImage, 10);
    });

    cheetahAnimation.addEventListener('click', () => {
        cheetahAnimation.classList.remove('active');
        cheetahImg.classList.add('active');
        content.classList.add('active');
        cardTitle.textContent = "Cheetah";
    });

    setInterval(moveImage, 4000); // Move the image every 4 seconds

    moveImage(); // Start the animation immediately
});

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}
