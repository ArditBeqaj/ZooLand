// <-------------------- Slider -------------------------->
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);  // Reset the interval
}

function nextSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);  // Reset the interval
}




// <-------------------- Slider -------------------------->
// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    var welcomeHeader = document.getElementById('welcome-header');
    if (isInViewport(welcomeHeader)) {
      welcomeHeader.classList.add('visible');
    } else {
      welcomeHeader.classList.remove('visible');
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);




//-------------------- PIXI.JS LOAD SCREEN ---------------------//

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a.btn-animate');
    const loadingScreen = document.getElementById('loadingScreen');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default link behavior

            const targetPage = link.getAttribute('href');
            const imageUrl = link.getAttribute('data-image');

            // Show loading screen
            loadingScreen.style.display = 'flex';

            // Create the PixiJS application
            const app = new PIXI.Application({
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 0xfaf7df, // Background color without transparency
                // PixiJS doesn't support RGBA directly in backgroundColor
            });

            // Clear previous PixiJS content if any
            while (loadingScreen.firstChild) {
                loadingScreen.removeChild(loadingScreen.firstChild);
            }

            // Append the application canvas to the loading screen div
            loadingScreen.appendChild(app.view);

            // Set the canvas background color with transparency using CSS
            app.view.style.backgroundColor = 'rgba(250, 247, 223, 0.56)';

            // Load the specific image for the clicked link
            PIXI.Assets.load(imageUrl).then((texture) => {
                const sprite = new PIXI.Sprite(texture);
                
                // Center the sprite's anchor point
                sprite.anchor.set(0.5);
                
                // Move the sprite to the center of the screen
                sprite.x = app.screen.width / 2;
                sprite.y = app.screen.height / 2;
                
                // Add the sprite to the stage
                app.stage.addChild(sprite);
                
                // Rotate the sprite
                app.ticker.add((delta) => {
                    sprite.rotation += 0.1 * delta;
                });
            });

            // Wait for 3 seconds then navigate to the target page
            setTimeout(() => {
                window.location.href = targetPage;
            }, 3000);
        });
    });
});
//-------------------- PIXI.JS LOAD SCREEN ---------------------//