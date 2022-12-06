const fs = require("fs");

const data = fs.readFileSync("data.txt", {encoding: "utf-8"})
    .split("\n")

function splitCratesAndProcedure(d) {
    const procedures = []
    const crates = []
    let container = 1

    for (let element of d) {
        if (element === "") {
            container = 2
        }
        if (container === 1) {
            crates.push(element)
        }
        if (container === 2 && element !== "") {
            procedures.push(element)
        }
    }
    return {...{crates, procedures}}
}

function formatCrates(originalCrates){
    let formattedCratesOne = []
    for (let crate of originalCrates) {
        let fullElement = ""
        let element = ""
        for (let i = 0; i < crate.length; i++) {
            if (element.length <= 3) {
                element += crate[i]
            }
            if (element.length === 3) {
                if(element === "   "){
                    fullElement += 0
                }else if(element[0] === "[" && element[2] === "]"){
                    fullElement+= element[1]
                }
                element = ""
                i++
            }
        }
        fullElement += element
        formattedCratesOne.push(fullElement)
    }
    formattedCratesOne.pop()

    let formattedCrates = []

    for(let crate of formattedCratesOne){
        let formattedCrate = crate
        if(crate.length < formattedCratesOne[formattedCratesOne.length-1].length){
            for(let i = 1; i <= formattedCratesOne[formattedCratesOne.length-1].length - crate.length; i++){
                formattedCrate+=0
            }
        }
        formattedCrates.push(formattedCrate)
    }

    let crates = {}

    for(let crate of formattedCrates){
        for(let i = 0; i < crate.length; i++){
            if(crate[i] !== "0"){
                if(!crates[i+1]){
                    crates[i+1] = [crate[i]]
                }else{
                    crates[i+1].push(crate[i])
                }
            }
        }
    }
    return crates
}

function formatData(d) {
    const cratesAndProcedures = splitCratesAndProcedure(d)
    const originalProcedures = cratesAndProcedures.procedures.map(p => p.split(" "))
    const originalCrates = cratesAndProcedures.crates
    const words = ["move", "from", "to"]
    let crates = formatCrates(originalCrates)

    let procedures = []
    for (let procedure of originalProcedures) {
        let direction = {}
        for (let i = 0; i < procedure.length; i++) {
            if (words.includes(procedure[i])) {
                direction[procedure[i]] = parseInt(procedure[i + 1])
                i++
            }
        }
        procedures.push(direction)
    }

    return {...{crates, procedures}}
}

function performProceduresSecond() {
    const formattedData = formatData(data)
    const crates = formattedData.crates
    for (let procedure of formattedData.procedures) {
        let temp = []
        for (let i = 1; i <= procedure.move; i++) {
            temp.push(crates[procedure.from].shift())
        }
        crates[procedure.to].unshift(...temp)
    }

    let letterCombo = ""
    for (let key in crates) {
        letterCombo += crates[key].shift()
    }
    return letterCombo
}
console.log(performProceduresSecond()) // VRZGHDFBQ