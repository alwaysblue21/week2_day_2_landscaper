//////////// section1 //////////////
// You are starting a landscaping business, but all you have are your teeth.
// Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
let name = prompt ("Hello there! What is your name?")
let money;

const start = () => {
  money = 0;
  askForAction();
}

const showStatus = () => {
  alert (`${name}! now you have $${money}!`);
}

const canIUpgrade = () => {
  if (money >= 5){
    showStatus();
     const choice = prompt ("You have enough money to buy a pair of rusty scissors for $5! Would you like to buy them?", "yes or no");
     if (choice === "yes") {
      money -= 5;
      alert ("With a pair of rusty scissors you can make $5 per day!!!");
      rustyScissors();
     } else {
      alert ("But you will make more money with a pair of rusty scissors.......");
    askForAction();
     }
  } else {
    askForAction();
  }
}


const askForAction = () => {
  showStatus();
  const choice = prompt ("Do you want to work today?", "yes or no");
  if (choice === "yes") {
    money ++
    canIUpgrade();
    askForAction();
  } else {
    alert ("Come back tmr!!!");
    askForAction();
  }
}

const rustyScissors = () => {
  showStatus();
  const choice = prompt ("Do you want to work today with a pair of rusty scissors?", "yes or no");
  if (choice === "yes") {
    money += 5;
    rustyScissors();
  } else {
    alert ("come back tmr!!!")
    rustyScissors();
  }
}

start();
  

