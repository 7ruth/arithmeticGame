
// _____ Define Vars  _______________

var game ={
  numbers:[],
  operators:[],
  mathSymbols:["/","+","-","*"],
  equation:[],
  equationLengthLimiter:2,
  min:1,
  max:10,
  questions:5,
  turn:0,
  equationGeneratorCounterNumbers:0,
  equationGeneratorCounterOperators:0,
  userAnswer:[],
  solution:0,
};

// _____ Hide the divs at first _______________


document.getElementById('start').focus();

// _____ Event Listener To Kick Things Off _______________

document.getElementById('start').addEventListener('click', arithmeticGamePopulate);
document.getElementById('form').addEventListener('submit', checkAnswer);

// _____ Settings  _______________

document.getElementById('numberOfQuestions').addEventListener('submit', function() {
  event.preventDefault();
  game.questions = parseInt(document.getElementById('userQuestionsNumber').value);
  document.getElementById('userQuestionsNumber').value = "Settings Changed!";

});

document.getElementById('numberOfTerms').addEventListener('submit', function() {
  event.preventDefault();
  if (parseInt(document.getElementById('userTermNumber').value)>4) {
    game.equationLengthLimiter=4;
  } else if (parseInt(document.getElementById('userTermNumber').value)<2) {
    game.equationLengthLimiter=2;
  } else {
   game.equationLengthLimiter = parseInt(document.getElementById('userTermNumber').value);
  }

  document.getElementById('userTermNumber').value = "Settings Changed!";
});


// _____ Main Arithmetic Function _______________

function arithmeticGameSetUp () {

        // _____ Determine Game Requirements   _______________

            // later ask if you want more questions... game.questions
            // set difficulty

        // _____ Generate All The Questions _______________

              // _____ Function (Random Number and Operators)_______________

              function getRandomInt() {
                  return Math.floor(Math.random() * (game.max - game.min + 1)) + game.min;
              }

              function getRandomOperator() {
                  return game.mathSymbols[Math.floor(Math.random() * game.mathSymbols.length)];
              }

              // _____ Generate Numbers Array With All The Numbers _______________

              for (var i=0; i<(game.questions*game.equationLengthLimiter);i++){
                    game.numbers.push(getRandomInt());
              }

              // _____ Generate Operators Array of All Math Symbols _______________

              for (var i=0; i<(game.questions*(game.equationLengthLimiter-1));i++){
                    game.operators.push(getRandomOperator());
              }
        }

function gameStart () {

                  // _____ Hide Button and Reveal Other Divs _______________
                  // insert opacity fade... and start a clock with a delay?
                  document.getElementById('start').style.display = "none";
                  document.getElementById('gameContainer').style.display = "block";
                  document.getElementById('bonus').style.display = "none";
                  document.getElementById('instructions').style.display = "none";
                  document.getElementById('userAnswer').focus();
                  document.getElementById('userAnswer').select();

                  if (game.equationLengthLimiter > 2 ) {
                    document.getElementsByClassName('equationContainer')[0].style.fontSize = '10vw';
                  }

                  // _____ TIMER _______________
                      var timer ={start:'', time:'', elapsed:''};
                      timer.start = new Date().getTime();
                      timer.elapsed = '0.0';

                          window.setInterval(function() {

                                timer.time = new Date().getTime() - timer.start;

                                timer.elapsed = Math.floor(timer.time / 100) / 10;
                                if(Math.round(timer.elapsed) == timer.elapsed) { timer.elapsed += '.0'; }

                                document.title = timer.elapsed;
                                document.getElementById('timer').innerHTML= timer.elapsed;

                                }, 100);
}

function arithmeticGamePopulate () {
              game.turn += 1;

              if (game.turn===1){
                arithmeticGameSetUp();
                gameStart();
              }



              game.equation=[];
              // _____ Generate The Equation  _______________
              for (var i = 0; i<(game.equationLengthLimiter+(game.equationLengthLimiter-1)); i++){
                  if (i%2 === 0) {
                      game.equation.push(game.numbers[game.equationGeneratorCounterNumbers]);
                      game.equationGeneratorCounterNumbers +=1;
                  } else {
                    game.equation.push(game.operators[game.equationGeneratorCounterOperators]);
                    game.equationGeneratorCounterOperators +=1;
                  }
              }
              // _____ Solve The Equation  _______________
              var stringEquation = game.equation.toString();
              stringEquation = stringEquation.replace(/,/g," ");
              document.getElementById('equationContainer').innerHTML=stringEquation;
              game.solution = Math.round(eval(stringEquation) * 100) / 100;

              // _____ Clear Input Box  _______________
              document.getElementById('userAnswer').value = "";
}


          // _____ Check User Input vs Solution  _______________

          game.userAnswer = parseInt(document.getElementById('userAnswer').value);

          function checkAnswer() {
                    event.preventDefault();
                if ((Math.round((document.getElementById('userAnswer').value * 1000)/10)/100).toFixed(2) == game.solution) {

                    if (game.turn === game.questions) {

                        document.getElementById('gameContainer').style.display = "none";
                        document.getElementById('congratulations').innerHTML = "You won in just "+ document.getElementById('timer').innerHTML + " seconds!!!\nYou answered " + game.questions + " questions.";
                        document.getElementById('gameContainer').style.display= "none";
                        document.getElementById('theEnd').style.display= "block";
                        document.getElementById('retry').style.display= "block";
                        document.getElementsByClassName('Finn')[0].style.display= "block";

                        document.getElementById('retry').addEventListener('mouseover', function(){
                              document.getElementsByClassName('Finn')[0].style.opacity= 1;
                        });

                        document.getElementById('retry').addEventListener('mouseout', function(){
                              document.getElementsByClassName('Finn')[0].style.opacity= 0;
                        });

                        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

                          function fadeOutEffect() {
                              var fadeTarget = document.getElementsByClassName('Finn')[0];
                              var fadeEffect = setInterval(function () {
                                  if (fadeTarget.style.opacity > .9) {
                                      clearInterval(fadeEffect);
                                  } else {
                                      fadeTarget.style.opacity += 0.1;
                                  }
                              }, 200);
                          }
                              document.getElementsByClassName('Finn')[0].fadeOutEffect()
                        }

                    } else {
                        arithmeticGamePopulate();
                    }

                } else {
                    document.getElementById('userAnswer').value = "";
                    document.getElementById('userAnswer').focus();
                    document.getElementById('userAnswer').select();

                    alert('try again');
                }
          }


// _____ FB Integration  _______________
    function fbShare(url, title, descr, image, winWidth, winHeight) {
       var winTop = (screen.height / 2) - (winHeight / 2);
       var winLeft = (screen.width / 2) - (winWidth / 2);
       window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
   }

//---------------------------------------------------------------------------------------------------
// _____ Algebraic! (Word Rainbow Animation - credit MettaFizzy)  _______________
// _____ Modifications from original code: canvas size and positioning as well as cross platform rendering, colors, amount of colors in the rainbow, word being animated  _______________

          var wordmark = document.querySelector('.rainbow-wordmark');
          var wordmarkImg = wordmark.querySelector('.rainbow-wordmark__image');
          var canvas = wordmark.querySelector('.rainbow-wordmark__canvas');
          var ctx = canvas.getContext('2d');
          var trailCount = 93;
          var canvasWidth = canvas.width;
          var canvasHeight = canvas.height;

          // ----- load image ----- //

          var whiteImg = new Image();
          whiteImg.onload = onWhiteImgLoad;
          whiteImg.src = 'Untitled4.png';

          function onWhiteImgLoad() {
            setColorCanvas( '1', '#ff3411' );
            setColorCanvas( '2', '#000aff' );
            setColorCanvas( '3', '#00ffe0' );
            setColorCanvas( '4', '#ff00fc' );
            setColorCanvas( '5', '#ffe600' );
            animate();
          }

          var colorCanvases = {};

          // get a canvas with the logotype rendered in a color
          function setColorCanvas( name, color ) {
            var colorCanvas = document.createElement('canvas');
            colorCanvas.width = whiteImg.width;
            colorCanvas.height = whiteImg.height;
            var colorCtx = colorCanvas.getContext('2d');
            colorCtx.drawImage( whiteImg, 0, 0 );
            colorCtx.globalCompositeOperation = 'source-in';
            colorCtx.fillStyle = color;
            colorCtx.fillRect( 0, 0, whiteImg.width, whiteImg.height );
            colorCanvases[ name ] = colorCanvas;
          }

          // ----- animate rainbow ----- //

          var isHovering = false;
          var t = 0;

          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           isHovering = true;
          }

          var rainbow = [];
          (function() {
            for ( var i=0; i < trailCount; i++ ) {
              rainbow.push(null);
            }
          })();

          wordmarkImg.onmouseenter = function() {
            isHovering = true;
          };

          wordmarkImg.onmouseleave = function() {
            isHovering = false;
          };

          var colorCycle = [ '1', '2', '3', '4', '5' ];

          function animate() {
            update();
            render();
            requestAnimationFrame( animate );
          }

          function update() {
            t++;

            var colorCycleIndex = Math.floor( t / 10 ) % 5;
            var nextColor = isHovering ? colorCycle[ colorCycleIndex ] : null;

            rainbow.pop();
            rainbow.pop();
            rainbow.pop();
            rainbow.unshift( nextColor );
            rainbow.unshift( nextColor );
            rainbow.unshift( nextColor );
          }

          function render() {
            ctx.clearRect( 0, 0, canvasWidth, canvasHeight );

            // iterate backwards through rainbow
            for ( var i = rainbow.length-1; i >= 0; i-- ) {
              var color = rainbow[i];
              if ( color ) {
                ctx.drawImage( colorCanvases[ color ], i+1, i+1 );
              }
            }
          }
