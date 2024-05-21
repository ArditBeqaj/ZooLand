document.addEventListener('DOMContentLoaded', () => {
    const hive = document.getElementById('hive');
    const hexagonContainer = document.getElementById('hexagon-container');
    const hiveContainer = document.getElementById('hive-container');
    const cardTitle = document.querySelector('.card-title');
    const buzzSound = document.getElementById('buzz-sound');
    const workerBee = document.getElementById('worker-bee');
    const animationContainer = document.getElementById('animation-container');
    const animatedBee = document.getElementById('animated-bee');
    const honey = document.getElementById('honey');
    const queenBee = document.querySelector('.hexagon img[alt="Queen Bee"]');
    const hexagons = document.querySelectorAll('.hexagon');

    let queenClickCount = 0;

    

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

    workerBee.addEventListener('click', () => {
        // Hide hexagons
        hexagonContainer.style.visibility = 'hidden';

        animationContainer.classList.remove('d-none');
        animatedBee.classList.add('animate');

        animatedBee.addEventListener('animationend', () => {
            honey.classList.remove('d-none');
            animatedBee.classList.add('d-none');
            flower.classList.add('d-none');

            // After showing honey, hide it and show hexagons again
            setTimeout(() => {
                honey.classList.add('d-none');
                animatedBee.classList.remove('animate');
                animatedBee.classList.remove('d-none');
                flower.classList.remove('d-none');
                animationContainer.classList.add('d-none');
                hexagonContainer.style.visibility = 'visible';
            }, 1000); // 2 seconds duration for honey visibility
        }, { once: true });
    });

    queenBee.addEventListener('click', () => {
        queenClickCount++;

        if (queenClickCount === 1) {
            hexagons.forEach(hex => hex.style.display = 'none');
            cardTitle.style.visibility = 'hidden';

            const message = document.createElement('div');
            message.id = 'queen-warning';
            message.textContent = "DONT TOUCH THE QUEEN, YOU MIGHT GET HURT";
            message.style.fontFamily = '"Sriracha", cursive';
            message.style.fontSize = '2rem';
            message.style.color = '#ff0000';
            message.style.textAlign = 'center';
            message.style.marginTop = '20px';
            document.querySelector('.card-body').appendChild(message);

            setTimeout(() => {
                document.getElementById('queen-warning').remove();
                hexagons.forEach(hex => hex.style.display = 'block');
                cardTitle.style.visibility = 'visible';
            }, 3000);
        } else if (queenClickCount === 2) {
            alert("I told you, go to hospital fast");
            window.location.href = 'index.html';
        }
    });

   
});
