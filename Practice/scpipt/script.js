$('.hiring_items > div').on('click', function(){
   $(this).children('.hiring-icon').toggleClass('hiring-rotate-icon');
   $(this).parent('.hiring_items').toggleClass('change_color')
   $(this).next('.hiring_ittext').slideToggle(300)
})
$('.find_items > div').on('click', function(){
   $(this).children('.find_pretitle-text').toggleClass('change_color-find')
   // $(this).children('.find_img').toggleClass('change_color-find')
    $(this).parent('.find_items').toggleClass('change_color-find')
    $(this).children('.find_img').children('svg').children('path').toggleClass('change_color-icon')
  $(this).next('.find_block').slideToggle(300)
})
