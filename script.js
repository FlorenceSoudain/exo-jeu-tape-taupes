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
    tempsPasse();
    apparait();
    clique();
    getRandomInt();
}
console.log("Temps de départ : " + temps);

function tempsPasse(){
    var t = setTimeout(tempsPasse, 1000);
    temps--;
    console.log(temps);

    if(temps === 0){
        clearTimeout(t);
    }
}

function apparait(){
    var holeRandom = Math.round(Math.random()*5);

    switch (holeRandom) {
        case 0 :
            $('.hole:eq(0)').addClass('up');
            break;
        case 1 :
            $('.hole:eq(1)').addClass('up');
            break;
        case 2 :
            $('.hole:eq(2)').addClass('up');
            break;
        case 3 :
            $('.hole:eq(3)').addClass('up');
            break;
        case 4 :
            $('.hole:eq(4)').addClass('up');
            break;
        case 5 :
            $('.hole:eq(5)').addClass('up');
            break;
    }


    console.log(holeRandom);
}

function clique(){
    $('.up').click(function () {
        score++;
        console.log("score : " + score);
        scoreBoard.html(score);
        holes.removeClass('up');
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(200);
    max = Math.floor(1000);
    var math = Math.floor(Math.random() * (max - min)) + min;
    console.log("Math : " + math);
}