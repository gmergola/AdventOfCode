const fs = require("fs");

function formatData(d){
    const length = d.length
    return {compartmentOne: d.slice(0,length/2).split(''), compartmentTwo: d.slice(length/2, length).split("")}
}

const rucksacks = fs.readFileSync("data.txt", {encoding: "utf-8"})
    .split("\n")
    .map((d) => formatData(d))

function mapLetterToPriority(){
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const letterToPriority = {}
    for(let i = 0; i < letters.length; i++){
        letterToPriority[letters[i]] = i+1
    }
    return letterToPriority
}

function q1(){
    let duplicateItemsTotal = 0
    const letterPriority = mapLetterToPriority()
    for(let rucksack of rucksacks){
        let letter = rucksack.compartmentOne.find(item => rucksack.compartmentTwo.includes(item))
        duplicateItemsTotal += letterPriority[letter]
    }
    return duplicateItemsTotal
}
console.log(q1()) // 7597