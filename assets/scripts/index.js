var MobileNav = (function() {
  var mobileMenuText = document.getElementsByClassName('mobile__text')[0];
  var schoolMenu = document.getElementById('school');
  var schoolSubMenu = document.getElementsByClassName('nav__submenu--school')[0];
  var libraryMenu = document.getElementById('library');
  var librarySubMenu = document.getElementsByClassName('nav__submenu--library')[0];
  var mobileMenu = document.getElementsByClassName('mobile__menu')[0];
  var navLinks = document.querySelectorAll('.mobile__menu .nav__link');
  
  return {
    init: function() {
      this.bindUIActions();
      
    },

    bindUIActions: function() {
      /* Change display status of the mobile menu and sub-menus on click */
      mobileMenuText.addEventListener('click', function() {
        mobileMenu.classList.toggle('mobile__menu--show');
      });

      schoolMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        schoolSubMenu.classList.toggle('nav__submenu--show');
      });

      libraryMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        librarySubMenu.classList.toggle('nav__submenu--show');
      });

      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          mobileMenu.classList.toggle('mobile__menu--show');
        });
      });
    }
  }
})();

(function() {
  var controls = document.getElementsByClassName('slideshow_-controls--dot');
  var slides = document.getElementsByClassName('slideshow__image');
  var slideNum = 0;

  return {
    currentSlide: function(selected) {
      slides.forEach(function(slide) {
        slide.style.opacity = "0";
      });

      slides[selected].style.opacity = "1";

      slideNum = selected;
    }
  }
})();


MobileNav.init();
// SlideShow.init();