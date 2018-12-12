/**
 * Created by sstienface on 03/12/2018.
 */


const holes = $('.hole');// utiliser la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $('.score');//utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $('.mole');// utiliser la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

$('#startGame').click(startGame);

var temps = 10;
var score = 0;

function startGame() {

    apparait();
    tempsPasse();
    $('#startGame').html('Rejouer');
    $('#startGame').click(function () {
        window.location.reload();
    })
}
console.log("Temps de départ : " + temps);

function tempsPasse(){
    var t = setTimeout(tempsPasse, 1000);
    temps--;
    console.log("chono : " + temps);

    if(temps === 0){
        clearTimeout(t);
    }
}

const hole1 = $('.hole:eq(0)');
const hole2 = $('.hole:eq(1)');
const hole3 = $('.hole:eq(2)');
const hole4 = $('.hole:eq(3)');
const hole5 = $('.hole:eq(4)');
const hole6 = $('.hole:eq(5)');

function apparait(){
    min = Math.ceil(200);
    max = Math.floor(1000);
    var math = Math.floor(Math.random() * (max - min)) + min;

    var trandom = setTimeout(apparait, math);
    if(temps === 0){
        clearTimeout(trandom);
        holes.removeClass('up');
    }
    var holeRandom = Math.round(Math.random()*5);

    switch (holeRandom) {
        case 0 :
            hole1.addClass('up');
            hole2.removeClass('up');
            hole3.removeClass('up');
            hole4.removeClass('up');
            hole5.removeClass('up');
            hole6.removeClass('up');
            break;
        case 1 :
            hole2.addClass('up');
            hole1.removeClass('up');
            hole3.removeClass('up');
            hole4.removeClass('up');
            hole5.removeClass('up');
            hole6.removeClass('up');
            break;
        case 2 :
            hole3.addClass('up');
            hole1.removeClass('up');
            hole2.removeClass('up');
            hole4.removeClass('up');
            hole5.removeClass('up');
            hole6.removeClass('up');
            break;
        case 3 :
            hole4.addClass('up');
            hole1.removeClass('up');
            hole2.removeClass('up');
            hole3.removeClass('up');
            hole5.removeClass('up');
            hole6.removeClass('up');
            break;
        case 4 :
            hole5.addClass('up');
            hole1.removeClass('up');
            hole2.removeClass('up');
            hole3.removeClass('up');
            hole4.removeClass('up');
            hole6.removeClass('up');
            break;
        case 5 :
            hole6.addClass('up');
            hole1.removeClass('up');
            hole2.removeClass('up');
            hole3.removeClass('up');
            hole4.removeClass('up');
            hole5.removeClass('up');
            break;
    }

    clique();
    console.log(holeRandom);
}

function clique(){
    $('.up').click(function () {
        if(holes.hasClass('up')){
            score++;
            console.log("score : " + score);
            scoreBoard.html(score);
            holes.removeClass('up');
        }

    })
}