const fs = require("fs");

const elves = fs.readFileSync("data.txt", {encoding: "utf-8"})
    .split("\n")
    .map((d) => d.split(''))

function formatRucksacks(){
    let elfNumber = 1
    let rucksacks = []
    let rucksackGroup = {}
    for(let rucksack of elves){
        if(elfNumber > 3){
            elfNumber = 1
            rucksacks.push(rucksackGroup)
            rucksackGroup = {}
        }
        rucksackGroup[`elf${elfNumber}`] = rucksack
        elfNumber++
    }
    rucksacks.push(rucksackGroup)
    return rucksacks
}

function mapLetterToPriority(){
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const letterToPriority = {}
    for(let i = 0; i < letters.length; i++){
        letterToPriority[letters[i]] = i+1
    }
    return letterToPriority
}

function q2(){
    let duplicateItemsTotal = 0
    const rucksacks = formatRucksacks()
    const letterPriority = mapLetterToPriority()
    for(let rucksack of rucksacks){
        let letter = rucksack.elf1.find(item => rucksack.elf2.includes(item) && rucksack.elf3.includes(item))
        duplicateItemsTotal += letterPriority[letter]
    }
    return duplicateItemsTotal
}

console.log(q2()) // 2607