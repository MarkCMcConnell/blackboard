var MobileNav = (function() {
  var mobileMenuText = document.getElementsByClassName('mobile__text')[0];
  var schoolMenu = document.getElementById('school');
  var schoolSubMenu = document.getElementsByClassName('nav__submenu--school')[0];
  var libraryMenu = document.getElementById('library');
  var librarySubMenu = document.getElementsByClassName('nav__submenu--library')[0];
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
        schoolSubMenu.classList.toggle('.nav__submenu--show');
      });

      libraryMenu.addEventListener('click', function() {
        librarySubMenu.classList.toggle('.nav__submenu--show');
      });
    }
  }
})();


MobileNav.init();