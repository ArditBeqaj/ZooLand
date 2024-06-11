function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const crowAnimation = document.querySelector('.crow-animation');
    const crowImg = document.querySelector('.crow-img');
    const content = document.querySelector('.content');
    const cardTitle = document.querySelector('.crow');
    const bg_crow = document.getElementById('bg-crow');

    crowAnimation.addEventListener('click', () => {
        crowAnimation.classList.remove('active');
        crowImg.classList.add('active');
        content.classList.add('active');
        cardTitle.textContent = "Crow";
        bg_crow.style.backgroundImage = 'none';
        bg_crow.style.backgroundColor = 'white';
    });
});