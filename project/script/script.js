$('.find_how > div').on('click', function(){
    $(this).children('.find_text').toggleClass('change_color')
    $(this).parent('.find_how').toggleClass('change_color')
    $(this).children('.how_nav').toggleClass('rev_color')
    $(this).children('.how_nav').children('.how_icon').toggleClass('how_rotate-icon')
    $(this).next('.how_text').slideToggle(300);
})
