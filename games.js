const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];


$("btn").click(function() {
    let userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor)
})






function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

function playSound(name) {

}