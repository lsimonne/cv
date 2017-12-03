function dotnavigation(){

    var numSections = $("section").length;

    $("#dot-nav li a").removeClass("active").parent("li").removeClass("active");
    $("section").each(function(i,item){
      var ele = $(item), nextTop;

      if (typeof ele.next().offset() != "undefined") {
        nextTop = ele.next().offset().top;
      }
      else {
        nextTop = $(document).height();
      }

      if (ele.offset() !== null) {
        thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
      }
      else {
        thisTop = 0;
      }

      var docTop = $(document).scrollTop();

      if(docTop >= thisTop && (docTop < nextTop)){
        $("#dot-nav li").eq(i).addClass("active");
      }
    });
}

// Add scrollspy to <body>
$("body").scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#nav_bar a").on("click", function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }
});

/* Dot navigation */
$(document).ready(function(){
    $(".my-tooltip").tooltip({
        placement: "left"
    });

    $(window).bind("scroll",function(e){
      dotnavigation();
    });

    $("#dot-nav li").click(function(){

        var id = $(this).find("a").attr("href"),
          posi,
          ele,
          padding = -10;

        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;

        $("html, body").animate({scrollTop:posi}, "slow");

        return false;
    });
});

/*
** hide dot-nav when on header
*/

var isVisible = false;
$(window).scroll(function(){
     var shouldBeVisible = $(window).scrollTop()>230;
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $("#dot-nav").show();
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $("#dot-nav").hide();
    }
});

/*
    Back to top button
    Only enabled if the document has a long scroll bar
    Note the window height + offset
*/
if (($(window).height() + 300) < $(document).height()) {
    $("#top_link").removeClass("hidden").affix({
        offset: {top:300}
    });
  }
