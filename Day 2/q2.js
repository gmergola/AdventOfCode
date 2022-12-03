/*
A & X = rock 1
B & Y = paper 2
C & Z = scissors 3

X means you need to lose 0
Y means you need to end the round in a draw 3
Z means you need to win 6

loss = 0
draw = 3
win = 6
* */

const fs = require("fs");

const data = fs.readFileSync("data.txt", {encoding: "utf-8"})
    .split("\n")
    .map((x) => x)

function qTwo(){
    const game = {"A Y": 4, "A X": 3, "A Z": 8, "B X": 1, "B Y": 5, "B Z": 9, "C X": 2, "C Y": 6, "C Z": 7 }
    let score = 0

    for(let match of data){
        score+= game[match]
    }

    return score
}

console.log(qTwo())