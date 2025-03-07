let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// score
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};

// draw
let drawgame = () => {
    msg.innerText = "game was draw please play again";
    msg.style.backgroundColor = "#081b31";
};

// showwinner
let showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";   
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";  
    }
};

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    // user vs computer
    if (userchoice === compchoice) {
        // draw
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        console.log("userwin =", userwin);
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
