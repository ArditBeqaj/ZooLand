function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const frogAnimation = document.querySelector('.frog-animation');
    const frogImg = document.querySelector('.frog-img');
    const content = document.querySelector('.content');
    const cardTitle = document.querySelector('.frog');

    frogAnimation.addEventListener('click', () => {
        frogAnimation.classList.remove('active');
        frogImg.classList.add('active');
        content.classList.add('active');
        cardTitle.textContent = "Common Frog";
    });
});
