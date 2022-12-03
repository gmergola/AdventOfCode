
/*
A & X = 1 rock
B & Y = 2 paper
C & Z = 3 scissors

loss = 0
draw = 3
win = 6
* */

const fs = require("fs");

const data = fs.readFileSync("data.txt", {encoding: "utf-8"})
    .split("\n")
    .map((x) => x)

function qOne(){
    const game = {"A Y": 8, "A X": 4, "A Z": 3, "B X": 1, "B Y": 5, "B Z": 9, "C X": 7, "C Y": 2, "C Z": 6 }
    let score = 0

    for(let match of data){
        score+= game[match]
    }

    return score
}

console.log(qOne()) // 12458