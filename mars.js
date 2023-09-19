alert('Hello!')
const username = prompt("What is your name?")
alert("Hey there," + " " + username)
const welcome_instructions = "We're going to mars! I hope you're ready for this adventure:)"
alert(welcome_instructions)
let excited = prompt("are you excited? (Type Y or N)")
excited = excited.toUpperCase()

if (excited === "Y") {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
}
if (excited === "N") {
    alert("Well, it's too late to back out now")
}
console.log(excited.startsWith("y"))
alert("It's time to pack for your trip!")
let numSuitcases = prompt("How many suitcases will you bring?")
numSuitcases = Number(numSuitcases)
if (numSuitcases > 2) {
    alert("That's wayyyy too many. You'll have to pack more lightly")
}
    if (numSuitcases <= 2) {
        alert("Perfect. You'll certainly fit in the ship!")
    }

alert("You're allowed to bring one animal with you")
let companionType = prompt("what kind of animal would you like to bring?")
let companionName = prompt("What is your animal's name?")


let firstLetter = companionName[0]
console.log(firstLetter)
firstLetter = firstLetter.toUpperCase()

let otherLetters = companionName.slice(1)

otherLetters = otherLetters.toLowerCase()

companionName = firstLetter + otherLetters
alert("So you're bringing " + companionName + " the " + companionType + "?!")


// this code works

alert("NASA wants to give you a personalized experience on your ship")

let decorChoice = prompt("your options are...   A sleek     B retro    C minimalist. Which style would you like?")

decorChoice = decorChoice.toUpperCase()
let decor
if (decorChoice === "A") {
    decor = "modern"
}
else if (decorChoice === "B") {
    decor = "retro"
}
else if (decorChoice === "C") {
    decor = "minimalist"
}

alert("Looks like you chose " + decor)

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`)


let timer = 5 

while (timer > 0) {
    alert(`${timer}...`)
    timer -= 1
}
alert('!!!LIFTOFF!!!')
