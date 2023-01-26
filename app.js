const allKeys = document.querySelectorAll(".key");
const getCountWrong = document.querySelector(".incorrect")
const getCountCorrect = document.querySelector(".correct")
let countWrong = 0;
let countCorrect = 0;

function random() {
    let keyJiggle = allKeys[Math.floor(Math.random() * allKeys.length)];
    keyJiggle.classList.add("jiggle");
};

function removeJiggle(keyJiggle) {
    keyJiggle.classList.remove("jiggle")
};

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    let keyJiggle = document.querySelector(".jiggle");
    let keyPressed = event.key.toUpperCase();


    if ( keyPressed == keyJiggle.dataset.key) {
        countCorrect += 1; 
        getCountCorrect.innerHTML = ("Correct: " + countCorrect);
        removeJiggle(keyJiggle);
        random();  
    } else {
        countWrong += 1; 
        getCountWrong.innerHTML = ("Wrong: " + countWrong);
        alert("Wrong one! Give it another try!")
    }
});


document.querySelector(".reset").addEventListener("click", function() {
    let countCorrect = 0;
    getCountCorrect.innerHTML = ("Correct: " + countCorrect);

    let countWrong = 0;
    getCountWrong.innerHTML = ("Wrong: " + countWrong);  
});

