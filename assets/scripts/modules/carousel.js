var Slideshow = (function () {
    var carousel = document.getElementsByClassName('carousel')[0];
    var controls = document.querySelectorAll('.carousel__controls');
    var slides = document.querySelectorAll('.carousel__slide');
    var currentIndex = 1;
    var intervalTime = 5000;
    var interval = setInterval(this.showSlide, this.settings.intervalTime);
    
    return {
        init: function() {
            
        }
    }

  init: function() {
    this.play();
  },

  bindUIActions: function() {
    this.settings.controls.on("click", function() {
      this.currentSlide(n);
    });
  },
  
  currentSlide: function(n) {
      
  }
  
  play: function() {
    this.settings.intervalFn;
  },
  
  showSlide: function() {
      for(i=0; i < this.slides.length; i++) {
          this.slides[i].classList.add('carousel__slide--active');
          this.controls[i].classList.add('carousel__controls--active');
      }
      this.slide.currentIndex++;
      
      if (this.slide.currentIndex > this.slides.length) {
          this.slide.currentIndex = 1;
          this.slides[currentIndex - 1].classList.remove('carousel__slide--active');
          this.controls[currentIndex - 1].classList.remove('carousel__slide--active');
      }
  },
  
  stop: function() {
    clearInterval()    
  }
})();