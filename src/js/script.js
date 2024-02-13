$(document).ready(function(){
    $('ul.subheader__tabs').on('click', 'li:not(.subheader__tab_active)', function() {
        $(this) 
            .addClass('subheader__tab_active').siblings().removeClass('subheader__tab_active')
            .closest('div.container').find('div.subheader__content').removeClass('subheader__content_active').eq($(this).index()).addClass('subheader__content_active');
      });

      $('ul.subheader__tabs').on('click', 'li:not(.subheader__tab_block)', function () {
        $(this)
            .addClass('subheader__tab_block').siblings().removeClass('subheader__tab_block')
            .closest('div.container').find('div.subheader-item').removeClass('subheader-item_block').eq($(this).index()).addClass('subheader-item_block');
        });

        $('.subheader__wrapper-tabs').on('click', '.subheader__link_close', function () {
            $(this)
                .addClass('subheader-link_close').siblings().removeClass('subheader-link_close')
                .closest('div.container').find('div.subheader-item').removeClass('subheader-item_block').eq($(this).index()).addClass('subheader-item_block');
        });

      function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
               e.preventDefault();
               $('.subheader-item_content').eq(i).toggleClass('subheader-item_content_active');
               $('.subheader-item_list').eq(i).toggleClass('subheader-item_list_active');
            })
          });
      };
      toggleSlide('.subheader-item__link');
      toggleSlide('.subheader-item__back');

      $('.carousel-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3
      });
      
      var filtered = false;
      
      $('.js-filter').on('click', function(){
        if (filtered === false) {
          $('.carousel-inner').slick('slickFilter',':even');
          $(this).text('Unfilter Slides');
          filtered = true;
        } else {
          $('.carousel-inner').slick('slickUnfilter');
          $(this).text('Filter Slides');
          filtered = false;
        }
      });

});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__mobile-list'),
    menuItem = document.querySelectorAll('.header__mobile-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__mobile-list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__mobile-list_active');
        })
    })
})