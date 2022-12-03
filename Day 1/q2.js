const fs = require("fs");

const data = fs.readFileSync("data.txt", {encoding: "utf-8"})
    .split("\n")
    .map((x) => `${x}` === "" ? null : parseInt(x))

function getAllCalories() {
    const calories = []
    let calorieCount = 0
    for (let calorie of data) {
        if (calorie !== null) {
            calorieCount += calorie
        } else {
            calories.push(calorieCount)
            calorieCount = 0
        }
    }
    calories.push(calorieCount)
    return calories
}

function qTwo() {
    const calories = getAllCalories()
    calories.sort()
    return calories[calories.length - 1] + calories[calories.length - 2] + calories[calories.length - 3]
}

console.log(qTwo()) // 200158