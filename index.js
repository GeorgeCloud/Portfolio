AOS.init();

var width = $(window).width();

window.onscroll = function() {
  if ((width >= 1000)) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      $("#header").css("background", "#fff");
      $("#header").css("color", "#000");
      $("#header").css("box-shadow", "0px 0px 20px rgba(0, 0, 0, 0.09)");
      $("#header").css("padding", "4vh 4vw");
      $("#navigation a").hover(function() {
        $(this).css("border-bottom", "2px solid rgb(255, 44, 90)");
      }, function() {
        $(this).css("border-bottom", "2px solid transparent");
      });
    } else {
      $("#header").css("background", "transparent");
      $("#header").css("color", "#fff");
      $("#header").css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 0)");
      $("#header").css("padding", "6vh 4vw");
      $("#navigation a").hover(function() {
        $(this).css("border-bottom", "2px solid #fff");
      }, function() {
        $(this).css("border-bottom", "2px solid transparent");
      });
    }
  }
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function magnify(imglink, title, description, stack, repoUrl, liveUrl) {
  $("#img_here").css("background", `url('${imglink}') center center`);
  $("#magnify").css("display", "flex");
  $("#magnify").addClass("animated fadeIn");
  $("#magnify-content").css("display", "flex");
  setTimeout(function() {
    $("#magnify").removeClass("animated fadeIn");
  }, 800);

  $("#title").text(title);
  $("#description").text(description);
  $("#stack").text(stack);
  $("#repo-url").attr("href", repoUrl);
  $("#live-url").attr("href", liveUrl);
}

function closemagnify() {
  $("#magnify").addClass("animated fadeOut");
  setTimeout(function() {
    $("#magnify").css("display", "none");
    $("#magnify").removeClass("animated fadeOut");
    $("#magnify-content").css("display", "none");
    $("#magnify-content").removeClass("animated fadeOut");
    $("#img_here").css("background", `url('') center center`);
  }, 800);
}

setTimeout(function() {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function() {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1650);

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('body,html').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function() { window.location.hash = hash; });
    }
  });
});
