document.addEventListener('DOMContentLoaded', () => {

     //--------------------Bee ANIMATIONS-------------------------------- //
    const hive = document.getElementById('hive');
    const hexagonContainer = document.getElementById('hexagon-container');
    const hiveContainer = document.getElementById('hive-container');
    const cardTitle = document.querySelector('.bee-title');
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
     //--------------------Bee ANIMATIONS-------------------------------- //
     


    //--------------------Butterfly ANIMATIONS-------------------------------- //
    const butterflyTitle = document.querySelector('#butterfly .butterfly-title');
    const butterflyImageContainer = document.getElementById('butterfly-image-container');
    
    let img;
    let originalImageSrc = 'img/butterfly.png'; // Replace with the path to your original image
    let alternateImageSrc = 'img/flying.gif'; // Replace with the path to your alternate image


    butterflyTitle.addEventListener('click', () => {
        img = document.createElement('img');
        img.src = originalImageSrc;
        img.alt = 'Butterfly';
        img.classList.add('img-fluid'); // Optional: Add Bootstrap class for responsive image
        img.id = 'butterfly-img';
        butterflyImageContainer.innerHTML = ''; // Clear any existing content
        butterflyImageContainer.appendChild(img);

        img.addEventListener('click', () => {
            img.src = alternateImageSrc;
            img.style.width = '20%'; // Make the alternate image smaller
            img.style.height = 'auto'; // Maintain aspect ratio
            animateImage();
        });
    });

    function animateImage() {
        img.style.position = 'absolute';
        img.style.transition = 'transform 0.5s ease';

        let animationDuration = 3000; // 3 seconds
        let animationInterval = 500; // Interval for random movements

        let interval = setInterval(() => {
            let randomX = Math.random() * (butterflyImageContainer.clientWidth - img.clientWidth);
            let randomY = Math.random() * (butterflyImageContainer.clientHeight - img.clientHeight);
            img.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, animationInterval);

        setTimeout(() => {
            clearInterval(interval);
            img.style.transform = 'translate(0, 0)'; // Move back to the original position
            img.src = originalImageSrc; // Switch back to the original image
            img.style.height = '300px'; // Reset size to original
            img.style.width = 'auto';
        }, animationDuration);
    }
     //--------------------Butterfly ANIMATIONS-------------------------------- //
});


