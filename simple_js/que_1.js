// Q1. 
// Write a program to demonstrate how a function can be passed as a parameter to another function.

function identifyGreeting() {
    let currentDate = new Date(); // for now
    const currentHours = currentDate.getHours();
    if (currentHours >= 5 && currentHours < 12) {
        return "Good Morning!!!";
    } else if (currentHours >= 12 && currentHours < 17) {
        return "Good Afternoon!!!";
    } else if (currentHours >= 17 && currentHours < 21) {
        return "Good Evening!!!";
    } else {
        return "Good Night!!!";
    }
}


function wishGreetings(name, identifyGreeting) {
    // let identifiedGreetings = identifyGreeting()
    console.log(name, identifyGreeting);
}


wishGreetings("Ronak", identifyGreeting());