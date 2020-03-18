$('.slider').slick({

  
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
       
       
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
       
        
        slidesToShow: 1
      }
    }
  ]
});
$('.testimonial-slider').slick({
  
  arrows: false,
  autoplay : true,
  autoplaySpeed : 3000,
  speed: 200,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,

        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,    
     
        slidesToShow: 1
      }
    }
  ]
});