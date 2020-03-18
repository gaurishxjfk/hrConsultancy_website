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