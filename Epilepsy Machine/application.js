// Epilepsy App using jQuery and bootstrap :)

// GOOGLE FONTS
  WebFontConfig = {
    google: { families: [ 'Shadows+Into+Light::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
// End Google fonts

var toggle = true;
var animate = false;
var r = 0, g = 0, b = 0;

randomText = function(length) {
   var text = "";
   var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    for(var i=0; i < length; i++) {
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return text;
}

randomColor = function() {
   var color = "";
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    color = "rgb(" +r+ "," +g+ "," +b+ ")";
    return color;
}

switchIt = function() {
    animate = !animate;
}

epilepsy = function() {
    toggle = !toggle;

    if(animate){
        document.body.style.background = randomColor();
        $(".alert-danger").text(randomText(25));
        $("#p").text(randomText(25));
        $("h1").text(randomText(10));

        //random text colors too
        $(".alert-danger").css({color: randomColor()});
        $("#p").css({color: randomColor()});
        $("h1").css({color: randomColor()});
    }
    else { //reset it all back
        document.body.style.background = "rgb(255,255,255)";
           $(".alert-danger").text("Alert Don't Use If You Have Epilepsy");
            $("h1").text("Epilepsy Machine");
             $("#p").text("Click the play button to lose your mind lol");

        //reset the colors back
        $(".alert-danger").css('color', '');
        $("#p").css('color', '');
        $("h1").css('color', '');
    }

    requestAnimationFrame(epilepsy);

}

epilepsy();
