$('.carousel').carousel({
  interval: 2500
})



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
