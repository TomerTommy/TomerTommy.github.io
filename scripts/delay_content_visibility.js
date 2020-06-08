

(function($) {

    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
})(jQuery);

var win = $(window);
var allMods = $(".fadeModule");

// Already visible modules
allMods.each(function(i, el) 
{
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible"); 
    } 
});

var i = 0;

win.scroll(function(event) 
{    
    allMods.each(function(i, el) {

        var el = $(el);
        if(el.is("#hhe_button") && i == 0) {
            el.focus();
            i++;
        }
        if (el.visible(true)) {
            el.addClass("come-in"); 
        }
    }); 
});

// For images and icons
var win1 = $(window);
var allMods1 = $(".imageFadeModule");

// Already visible modules
allMods1.each(function(i, el) 
{
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible-image"); 
    } 
});

win1.scroll(function(event) 
{    
    allMods1.each(function(i, el) {

        var el = $(el);

        if (el.visible(true)) {

            if(el.hasClass("contact_icon")) {
                el.addClass("fade-in");              
            }
            else {
                el.addClass("come-in-side");
            }
        }
    }); 
});

// For work structure
var x = 0;

var btn = $(".work_button");
var allMods2 = $(".workFadeModule");

btn.click(function(event) 
{    
    allMods2.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
            
        }
    });
});
