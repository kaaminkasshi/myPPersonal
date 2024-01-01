// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Animate the left half-circle
    anime({
      targets: ".left-half-circle img",
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 500,
    });
  
    // Animate the right straps
    anime({
      targets: ".strap",
      translateX: [50, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: anime.stagger(200, { start: 1000 }),
    });
  });
  
  
  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }

  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const bars = document.querySelectorAll('.bar');
  
    // Toggle active class on navbar
    navbar.classList.toggle('active');
  
    // Toggle color on bars
    bars.forEach(bar => {
      bar.classList.toggle('white-bars');
    });
  } 
  document.addEventListener("DOMContentLoaded", function () {
    // Define the text for each image
    const webDeveloperStrings = ["I am a web developer", "Web development is my passion", "Creating awesome websites"];
    const programmerStrings = ["I am a programmer", "Programming is my expertise", "Turning ideas into code"];
  
    // Initialize Typed.js for the web developer text
    const webDeveloperTyped = new Typed("#webDeveloperText", {
      strings: webDeveloperStrings,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true, // Infinite loop
    });
  
    // Initialize Typed.js for the programmer text
    const programmerTyped = new Typed("#programmerText", {
      strings: programmerStrings,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true, // Infinite loop
    });
  });
  