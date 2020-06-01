

$(function() {
    
    var $meters = $("#skill_list > li > span");
    var $section = $('#skills');
    var $queue = $({});
    
    var i = 100;

    function loadDaBars() {
        $("#skill_list > li > span").each(function() {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .delay(i)
                .animate({
                    width: $(this).data("origWidth")
                }, 1000,)
            i += 100;
        });
    }

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset + 300) {
            loadDaBars();
            // unbind event not to load scrolls again
            $(document).unbind('scroll');
        }
    });
    
});