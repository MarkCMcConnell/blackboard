var MobileNav = (function() {
  var mobileMenuText = document.getElementsByClassName('mobile__text')[0];
  var schoolMenu = document.querySelector('.mobile__menu #school');
  var schoolSubMenu = document.querySelector('.mobile__menu .nav__submenu--school')[0];
  var libraryMenu = document.querySelector('.mobile__menu #library');
  var librarySubMenu = document.querySelector('.mobile__menu .nav__submenu--library')[0];
  var mobileMenu = document.getElementsByClassName('mobile__menu')[0];
  
  return {
    init: function() {
      this.bindUIActions();
      
    },

    bindUIActions: function() {
      mobileMenuText.addEventListener('click', function() {
        mobileMenu.classList.toggle('mobile__menu--show');
      });

      schoolMenu.addEventListener('click', function() {
        schoolSubMenu.style.display = "none"
          ? schoolSubMenu.style.display = "block"
          : schoolSubMenu.style.display = "none";
        
        // schoolSubMenu.classList.toggle('.nav__submenu--show');
      });

      libraryMenu.addEventListener('click', function() {
        librarySubMenu.style.display = "none"
          ? librarySubMenu.style.display = "block"
          : librarySubMenu.style.display = "none";
      });
    }
  }
})();


MobileNav.init();