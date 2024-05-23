document.addEventListener("DOMContentLoaded", function() {
    const cheetahAnimation = document.querySelector('.cheetah-animation');
    const cheetahImg = document.querySelector('.cheetah-img');
    const content = document.querySelector('.content');
    const cardBody = document.querySelector('.card-body-cheetah');
    const cardTitle = document.querySelector('.cheetah');

    function moveImage() {
        cheetahAnimation.style.left = 800 + 'px';
    }

    cheetahAnimation.addEventListener('transitionend', () => {
        setTimeout(() => {
            cheetahAnimation.style.left = '0';
        }); // Pause for 2 seconds before resetting position
    });

    cheetahAnimation.addEventListener('click', () => {
        cheetahAnimation.classList.remove('active');
        cheetahImg.classList.add('hidden');
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
