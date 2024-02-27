var typed = new Typed('#element', {
    strings: ['Neel.', 'a Software Developer.', 'a Web Developer.', 'a Programmer.', 'a Tech Enthusiast.'],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    // JavaScript function to toggle the navigation menu for smaller screens
    function navFunc() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }

  // Function to set active class
  function setActive(element) {
      var links = document.querySelectorAll('.nav-link');
      links.forEach(function(link) {
          link.classList.remove('active');
      });
      element.classList.add('active');
  }

  function scrollToAbout() {
    event.preventDefault(); // Prevent the default anchor behavior
  
    const section = document.getElementById("about");
    const offset = 170; // Adjust this value based on your needs
  
    // Calculate the position you want to scroll to
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;
  
    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  }