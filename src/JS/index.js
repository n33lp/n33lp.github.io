var typed = new Typed('#element', {
    strings: ['Website Under Construction.', 'Check back soon!'],
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