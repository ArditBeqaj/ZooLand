function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const crowAnimation = document.querySelector('.crow-animation');
    const crowImg = document.querySelector('.crow-img');
    const content = document.querySelector('.content');
    const cardTitle = document.querySelector('.crow');

    crowAnimation.addEventListener('click', () => {
        crowAnimation.classList.remove('active');
        crowImg.classList.add('active');
        content.classList.add('active');
        cardTitle.textContent = "Crow";
    });
});