jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1) {
        jQuery('.oando-top').css({
            bottom: "30px"
        });
    } else {
        jQuery('.oando-top').css({
            bottom: "-10px"
        });
    }
});