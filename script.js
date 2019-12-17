$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


function hamburger() {
    let menu = document.getElementById('ham-menu');
    if (menu.className === 'ham-menu') {
        menu.className += ' responsive';
    } else {
        menu.className = 'ham-menu';
    }
}