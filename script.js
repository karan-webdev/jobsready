document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("contactButton").addEventListener("click", function() {
      window.location.href = "contact.html";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggleButton');
  var mobileLinks = document.getElementById('mobileLinks');
  var cover = document.getElementById('cover');
  var barOne = document.getElementById('bar-1');
  var barTwo = document.getElementById('bar-2');
  var barThree = document.getElementById('bar-3');

  function adjustCoverOpacity() {
    if (window.innerWidth > 600) {
      cover.style.display = 'none';
    } else {
      // Restore cover opacity to its state before above 600px script set it
      cover.style.display = 'block'
      
    }
  }

  // Initial adjustment
  adjustCoverOpacity();

  // Window resize event listener
  window.addEventListener('resize', function() {
    adjustCoverOpacity();
  });

  toggleButton.addEventListener('click', function() {
    if (mobileLinks.style.right === '0%') {
      mobileLinks.style.right = '-100%';
      cover.style.opacity = '0';
      cover.style.display = 'none';
      // Resetting the rotation of barOne, barTwo, and barThree
      barOne.style.transform = 'rotate(0deg)';
      barOne.style.transform += ' translateY(0)'; // Resetting translateY for barOne
      barTwo.style.opacity = '1'; // Making barTwo visible again
      barTwo.style.transform = 'translateY(0)'; // Resetting translateY for barTwo
      barThree.style.transform = 'rotate(0deg)';
      barThree.style.transform += ' translateY(0)'; // Resetting translateY for barThree
    } else {
      mobileLinks.style.right = '0%';
      cover.style.display = 'block';
      cover.style.opacity = '0.7';
      // Moving the top and bottom bars to the middle before rotating barOne
      barOne.style.transform = 'translateY(13.5px) rotate(45deg)'; // Adjusting translateY for barOne
      barTwo.style.opacity = '0'; // Hiding barTwo
      barThree.style.transform = 'translateY(-13.5px) rotate(-45deg)'; // Adjusting translateY for barThree
    }
  });

  cover.addEventListener('click', function() {
    mobileLinks.style.right = '-100%';
    cover.style.opacity = '0';
    cover.style.display = 'none';
    // Resetting the rotation of barOne, barTwo, and barThree when cover is clicked
    barOne.style.transform = 'rotate(0deg)';
    barOne.style.transform += ' translateY(0)'; // Resetting translateY for barOne
    barTwo.style.opacity = '1';
    barTwo.style.transform = 'translateY(0)'; // Resetting translateY for barTwo
    barThree.style.transform = 'rotate(0deg)';
    barThree.style.transform += ' translateY(0)'; // Resetting translateY for barThree
  });
});

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
      once: true, // Animation will only happen once - while scrolling down
      duration: 600, // Duration of animation in milliseconds // Delay before the animation starts in milliseconds
      easing: 'ease-in-out',
      offset: 100 // Easing function for the animation
   });



   
  });



 