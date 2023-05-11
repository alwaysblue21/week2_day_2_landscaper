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
  alert (`${name}! you have $${money}!`);
}

const askForAction = () => {
  showStatus();
  const choice = prompt ("Do you want to work today?", "yes or no");
  if (choice === "yes") {
    yes();
  } else {
    no();
  }
}

const yes = () => {
  money ++;
  askForAction();
}

const no = () => {
  askForAction();
}

start();
  

