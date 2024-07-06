

import inquirer from "inquirer";


let message  = await inquirer.prompt({
    name : "ans",
    type : "input",
    message : "enter your message"
})


let words = message.ans.trim().split(" ")
console.log(`We have ${words.length} words in this sentence`);


let char_count = words.join("")

console.log(`We have ${char_count.length} characters in this sentence`);


