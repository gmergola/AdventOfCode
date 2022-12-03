const fs = require("fs");

const data = fs.readFileSync("q1.txt", {encoding: "utf-8"})
    .split("\n")
    .map((x) => `${x}` === "" ? null : parseInt(x))

function qOne() {
    let maxCalories = 0
    let caloriesCount = 0
    for (let calorie of data) {
        if (calorie === null && caloriesCount > maxCalories) {
            maxCalories = caloriesCount
        }
        if (calorie === null) {
            caloriesCount = 0
        } else {
            caloriesCount += calorie
        }
    }
    return maxCalories
}

console.log(qOne()) // should be 67658