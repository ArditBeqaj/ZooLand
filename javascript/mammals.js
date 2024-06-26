function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const cheetahAnimation = document.querySelector('.cheetah-animation');
    const cheetahImg = document.querySelector('.cheetah-img');
    const content = document.querySelector('.content');
    const cardTitle = document.querySelector('.cheetah');
    const bg_cheetah = document.getElementById('bg-cheetah')

    cheetahAnimation.addEventListener('click', () => {
        cheetahAnimation.classList.remove('active');
        cheetahImg.classList.add('active');
        content.classList.add('active');
        cardTitle.textContent = "Cheetah";
        bg_cheetah.style.backgroundImage = "none";
        bg_cheetah.style.backgroundColor = 'white';
    });
});
