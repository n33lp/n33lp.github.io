var typed = new Typed('#element', {
    strings: ['Website Under Construction.', 'Check back soon!'],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }