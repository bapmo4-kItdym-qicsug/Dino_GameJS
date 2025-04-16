const wrapper = document.querySelector(".wrapper");
const dino = wrapper.querySelector(".dino");
const dinoImg = wrapper.querySelector(".dino img");
const road = wrapper.querySelector('.road img');
const cactus = wrapper.querySelector('.cactus');
const cactusImg = wrapper.querySelector('.cactus img');
const clouds = document.querySelectorAll(".wrapper .clouds div");
const scoreText = document.querySelector(".wrapper .score");
const gameOverBox = document.querySelector(".wrapper .game-over ");
const restartBtn = document.querySelector(".wrapper .game-over .restart-btn");
const highScoreText = document.querySelector(".wrapper .high-score");

let gameStart = false; //для повторного запуска игры
let jump = true; // блокирует повторые прыжки
let score = 0; //текущий счет
let globalRunInterval, globalCactusInterval, globalScoreInterval; //для остановки интервалов

let highScore = localStorage.getItem("high-score") || "00000";//Получает сохранённый рекорд из localStorage, если нет — устанавливает “00000”
highScoreText.innerHTML = "HI " + highScore;

let iniGme =()=>{ // проверяет началась игра или нет, если нет вызывает startGame 

    if(!gameStart){
        startGame();
    }
    gameStart = true;
}