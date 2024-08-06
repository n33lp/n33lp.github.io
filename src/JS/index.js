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
    
    // Calculate the position you want to scroll to
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const middleOfWindow = windowHeight / 2;
    
    // Adjust the position to center the section vertically
    const scrollToPosition = sectionTop - (middleOfWindow - (sectionHeight / 2));
    
    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }

  function scrollToJourney() {
    event.preventDefault(); // Prevent the default anchor behavior
    
    const section = document.getElementById("journey");
    
    // Calculate the position you want to scroll to
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const middleOfWindow = windowHeight / 2;
    
    // Adjust the position to center the section vertically
    const scrollToPosition = sectionTop - (middleOfWindow - (sectionHeight / 2));
    
    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }

  function scrollToSkills() {
    event.preventDefault(); // Prevent the default anchor behavior
    
    const section = document.getElementById("skills");
    
    // Calculate the position you want to scroll to
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const middleOfWindow = windowHeight / 2;
    
    // Adjust the position to center the section vertically
    const scrollToPosition = sectionTop - (middleOfWindow - (sectionHeight / 2));
    
    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }


  function scrollToProjects() {
    event.preventDefault(); // Prevent the default anchor behavior
    
    const section = document.getElementById("projects");
    
    // Calculate the position you want to scroll to
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const middleOfWindow = windowHeight / 2;
    
    // Adjust the position to center the section vertically
    const scrollToPosition = sectionTop - (middleOfWindow - (sectionHeight / 2));
    
    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }

  function scrollToTTT() {
    event.preventDefault(); // Prevent the default anchor behavior
    
    const section = document.getElementById("tictactoe");
    
    // Calculate the position you want to scroll to
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const middleOfWindow = windowHeight / 2;
    
    // Adjust the position to center the section vertically
    const scrollToPosition = sectionTop - (middleOfWindow - (sectionHeight / 2));
    
    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }

  function scrollToHome() {
    event.preventDefault(); // Prevent the default anchor behavior
    
    const section = document.getElementById("intro");
    
    // Calculate the position you want to scroll to
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const middleOfWindow = windowHeight / 2;
    
    // Adjust the position to center the section vertically
    const scrollToPosition = sectionTop - (middleOfWindow - (sectionHeight / 2));
    
    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }