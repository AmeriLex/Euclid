document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.working-steps-item__link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })

    document.querySelectorAll('.header-burger').forEach(function(burger) {
        burger.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelector(`[data-target="${path}"]`).classList.add('mobile-nav-active')
        })
    })

    document.querySelectorAll('.burger-active').forEach(function(burger) {
        burger.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelector(`[data-target="${path}"]`).classList.remove('mobile-nav-active')
        })
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
          horizontalClass: 'swiper-pagination-horizontal',
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    $( function() {
        $( ".accordion" ).accordion({
            header: "> .question-list__item > .question-list-item__title",
            collapsible: true,
            active: false,
        });
      } );
      
})