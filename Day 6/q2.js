const fs = require("fs");

const signal = fs.readFileSync("data.txt", {encoding: "utf-8"})

function getFirstMarker(){
    let characters = []
    for(let i = 0; i < signal.length; i++){
        let character = signal[i]
        if(characters.length === 14){
            return i
        }
        if(characters.includes(character)){
            characters.indexOf(character)
            characters.splice(0, characters.indexOf(character) + 1)
        }
        if(characters.length < 14 && !characters.includes(character)){
            characters.push(character)
        }
    }
}

console.log(getFirstMarker()) // 3476