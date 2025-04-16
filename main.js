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
let startGame = () =>{ // функция старта игры
    scoreInterval = setInterval(()=>{ //функция,каждые 150 млсек увеличивается значение переменной score на 1
        score++;//

        score <10 ? score = "0000" + score //Преобразует число в строку с ведущими нулями, чтобы всегда было 5 цифр
        : score < 100 ? score = "000" + score
        : score < 1000 ? score = "00" + score
        : score < 10000 ? score = "0" + score : score;

        scoreText.innerHTML = score;// отправляет текущее значение в HTML в класс score
    },150);
    globalScoreInterval = scoreInterval;// останавливает счет при завершении игры

    road.classList.add("road-active");//запускает анимацию дороги
    cactus.classList.add("cactus-active");//запускает анимацию кактуса через

    cactusInterval = setInterval(()=>{
        cactusImg.src =`images/${randomCactus()}.png`;// каждые 1.5 сек меняет картинку кактуса
    },1500);
    globalCactusInterval = cactusInterval;

    dinoRun();// запускает анимацию бега динозавра

    generateClouds();//запускает анимацию облоков
}