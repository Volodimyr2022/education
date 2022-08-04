$('.hiring_items > div').on('click', function(){
   $(this).children('.hiring-icon').toggleClass('hiring-rotate-icon');
   $(this).parent('.hiring_items').toggleClass('change_color')
   $(this).next('.hiring_ittext').slideToggle(300)
})