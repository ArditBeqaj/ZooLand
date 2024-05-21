document.addEventListener('DOMContentLoaded', () => {
    const hive = document.getElementById('hive');
    const hexagonContainer = document.getElementById('hexagon-container');
    const hiveContainer = document.getElementById('hive-container');
    const cardTitle = document.querySelector('.card-title');
    const buzzSound = document.getElementById('buzz-sound');
    

    

    hive.addEventListener('click', () => {
        hive.style.transition = 'top 1s ease';
        hive.style.top = `${hiveContainer.clientHeight - hive.clientHeight}px`; // Move hive to bottom

        // Play the sound
        buzzSound.play();

        // Show the card title
        cardTitle.style.visibility = 'visible';

        // Wait until the transition is finished before making hexagon images visible
        hive.addEventListener('transitionend', () => {
            hexagonContainer.style.visibility = 'visible';
        }, { once: true });
    });

   
});
