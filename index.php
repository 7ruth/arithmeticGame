<?php require 'php/connections.php'; ?>
<?php

  if(isset($_POST['Register'])) {


  }

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Algebraic!</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

</head>
<body>
<?php echo '<p>Hello World</p>'; ?>

<!-- testing PHP Stuff-->

<form action="" method="post" name="RegisterForm" id="RegisterForm">
<div class="formElement"> </div>

</form>

<!-- Start of the main code-->

  <button id="start">

  <h1 class="rainbow-wordmark">
  <canvas class="rainbow-wordmark__canvas" width="665" height="300"></canvas>
  <img class="rainbow-wordmark__image" src="Untitled4.png" alt="Algebraic!"/>
  </button>

  <div id="instructions">
    This is a math game that tests how fast you can solve a set of simple equations.
    <br>
    <br>+ Final answers need to be rounded to 2 decimal points
    <br>+ ex. 2.3333 = 2.33 || 2.6666 = 2.67
    <br>+ You are timed on each attempt
    <br>+ Wrong answers are penalized with a pop-up
    <br>+ You won't be able to move on to the next questions until you get it right
    <br>
    <br> Settings!
    <details>
    <summary>How many questions? </summary>
      <form id="numberOfQuestions">
      <input type="text" id="userQuestionsNumber" autocomplete="off" value = '5'>
      </form>
    </details>
    <details>
    <summary>How many numbers in each equation? (max 4) </summary>
      <form id="numberOfTerms">
      <input type="text" id="userTermNumber" autocomplete="off" value = '2'>
      </form>
    </details>
  </div>


  <div id="gameContainer">
        <div id="timer"> Timer </div>
        <div id="questionsAnswered"> </div>
        <div id="equationContainer" class = "equationContainer"></div>
        <div id="equalsSign"> = </div>
        <form id="form">
        <input type="text" id="userAnswer" autocomplete="off" type="number">
        </form>

  </div>

  <div id="theEnd" style="color: rgba(0,0,0);">
    <div id="congratulations" > </div>
    <br><a href="javascript:fbShare('http://7ruth.github.io/arithmeticGame/', 'Algebraic!', 'Facebook share popup', 'http://vignette2.wikia.nocookie.net/deathbattlefanon/images/3/3c/Finn_the_Human.png/revision/latest?cb=20150406142522', 520, 350)" style="text-decoration: none; color: rgb(0, 0, 0);"> How do your friends stack up? Challenge them on  <img src='FBLogo.png' style="width:3.5vw;"> </a>
    <br><button id="retry"> <a href="http://7ruth.github.io/arithmeticGame/" style="text-decoration: none; color: white;"> Restart! </a> </button>
  </div>

  <div id = "bonus"> <a style="text-decoration: none; color: lightgray;" href='https://www.youtube.com/watch?v=PQH_y2wicF8'> <p> &#8709 </p> </a> </div>

  <div class="Finn"><img src='Finn.png' style="width:40%;"></div>

<script src="script.js"> </script>
</body>
</html>
