/*funçaõ para scroll suave*/
(function($) {
    var $doc = $('html,body');
    $('.scroll-page').click(function() {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
})(jQuery);