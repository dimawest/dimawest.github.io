$(document).ready(function(){
    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
               e.preventDefault();
               $('.chapter-item__content').eq(i).toggleClass('chapter-item__content_active');
               $('.chapter__list').eq(i).toggleClass('chapter__list_active');
            })
          });
      };
      toggleSlide('.chapter-item__link');
      toggleSlide('.chapter-item__back');
});