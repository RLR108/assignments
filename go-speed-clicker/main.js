var score; 
    var duration = 10; 
    var startTime; 
    var ended = true; 
    var timerTxt = document.getElementById("timer");
    var scoreTxt = document.getElementById("score");
    var clicksTxt = document.getElementById("clicks");
    var startBtn = document.getElementById("start");
    var clickArea = document.getElementById("clickarea");

       var show = function(elem) {
      elem.style.display = 'inline';
    };

    var hide = function(elem) {
      elem.style.display = 'none';
    };

       function startGame() {
      hide(startBtn);
      score = -1;
      ended = false;
      
      startTime = new Date().getTime();

      
      var timerId = setInterval(function() {
        var total = (new Date().getTime() - startTime) / 1000;
        
        if (total < duration) {
          timerTxt.textContent = total.toFixed(3);
          clicksTxt.textContent = (score / total).toFixed(2);
        } else {
          
          ended = true;
          clearInterval(timerId);        
          endGame();
        }
      }, 1);
  }

  // end game method
  function endGame() {
    // we write final stats
    var clicsBySeconds = (score / duration).toFixed(2);
    timerTxt.textContent = duration.toFixed(3);
    clicksTxt.textContent = clicsBySeconds;
    // we show start button to play an other game
    show(startBtn);

    
    setTimeout(function() {
      alert('You made ' + score + ' clicks in ' + duration + 
      ' seconds. It is ' + clicsBySeconds + 
      ' clicks by seconds. Try again!');
    }, 10);
  }

   startBtn.addEventListener("click", function(e) {
    startGame();
  });

    clickArea.addEventListener("click", function(e) {
    if (!ended) {
      score++;
      scoreTxt.textContent = score;
    }
  });