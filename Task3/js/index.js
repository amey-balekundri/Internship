function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function videoplay() {
      var video =document.getElementById("myvideo");
      if (video.paused){
            video.play();
      }else{
          video.pause();
      }
    }