const fs = require("fs");

const signal = fs.readFileSync("data.txt", {encoding: "utf-8"})

function getFirstMarker(num){
    let characters = []
    for(let i = 0; i < signal.length; i++){
        let character = signal[i]
        if(characters.length === 4){
            return i
        }
        if(characters.includes(character)){
            characters.splice(0, characters.indexOf(character) + 1)
        }
        if(characters.length < 4 && !characters.includes(character)){
            characters.push(character)
        }
    }
}

console.log(getFirstMarker(4)) // 1210
console.log(getFirstMarker(14)) // 3476