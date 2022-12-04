const fs = require("fs");

function formatData(data){
    let range = []
    let num = ''

    for (let element of data){
        if(element === ","){
            range.push(parseInt(num))
            num = ""
        }
        if(element !== "-" && element !== ","){
            num+= element
        }
        if(element==="-"){
            range.push(parseInt(num))
            num = ''
        }
    }
    range.push(parseInt(num))
    return range
}

const data = fs.readFileSync("data.txt", {encoding: "utf-8"})
    .split("\n")
    .map((x) => formatData(x))

function q1(){
    let count = 0
    for(let pair of data){
        if((pair[0] >= pair[2] && pair[1] <= pair[3]) || (pair[2] >= pair[0] && pair[3] <= pair[1])){
            count++
        }
    }
    return count
}

console.log(q1()) // 413