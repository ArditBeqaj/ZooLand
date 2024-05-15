$('.carousel').carousel();



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


let timeout;

function showDescription(card) {
  timeout = setTimeout(function() {
    const description = card.querySelector('.description');
    description.classList.remove('hidden');
  }, 3000);
}

function hideDescription(card) {
  clearTimeout(timeout);
  const description = card.querySelector('.description');
  description.classList.add('hidden');
}
