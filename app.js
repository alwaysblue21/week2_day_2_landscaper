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

const upgradeToRustyScissors = () => {
  if (money >= 5) {
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

const upgradeToOldTimeyPushLawnmower = () => {
  if (money >= 25) {
    showStatus();
    const choice = prompt ("You have enough money to buy an old-timey push lawnmower for $25! Would you like to buy it?", "yes or no");
    if (choice === "yes") {
      money -= 25;
      alert ("With an old-timey push lawnmower you can make $50 per day!!!");
      oldTimeyPushLawnmower();
    } else {
      alert ("But you will make more money with an old-timey push lawnmower.....");
      rustyScissors();
    }
  } else {
    rustyScissors();
  }
}

const upgradeToBatteryPoweredLawnmower = () => {
  if (money >= 250) {
    showStatus();
    const choice = prompt ("You have enough money to buy a battery-powered lawnmower for $250! Would you like to buy it?", "yes or no");
    if (choice === "yes") {
      money -= 250;
      alert ("With a battery-powered lawnmower you can make $100 per day!");
      batteryPoweredLawnmower();
    } else {
      alert ("But you will make more money with a battery-powered lawnmower......");
      oldTimeyPushLawnmower();
    }
  } else {
    oldTimeyPushLawnmower();
  }     
}

const upgradeToStarvingStudents = () => {
  if (money >= 500) {
    showStatus();
    const choice = prompt ("you have enough money to hire a team of starving students for $500! would you like to hire them?", "yes or no");
    if (choice === "yes") {
      money -= 500;
      alert ("With a team of starving students you can make $250 perday!");
      starvingStudents();
    } else {
      alert ("But you will make more money with a team of starving students......");
      batteryPoweredLawnmower();
    }
  } else {
    batteryPoweredLawnmower();
  }
}

const youWinTheGame = () => {
  if (money >= 1000) {
    showStatus();
    alert ("YOU WIN THE GAME!!!");
    gameOver();
  }
}

const byebye = () => {
  gg();
}

const askForAction = () => {
  showStatus();
  const choice = prompt ("Do you want to work today?", "yes or no");
  if (choice === "yes") {
    money ++
    upgradeToRustyScissors();
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
    upgradeToOldTimeyPushLawnmower();
    rustyScissors();
  } else {
    alert ("come back tmr!!!");
    rustyScissors();
  }
}

const oldTimeyPushLawnmower = () => {
  showStatus();
  const choice = prompt ("Do you want to work today with an old-timey push lawnmower???", "yes or no");
  if (choice === "yes") {
    money += 50;
    upgradeToBatteryPoweredLawnmower();
    oldTimeyPushLawnmower();
  } else {
    alert ("come back tmr!!!");
    oldTimeyPushLawnmower();
  }
}

const batteryPoweredLawnmower = () => {
  showStatus();
  const choice = prompt ("Do you want to work today with a battery-powered lawnmower???", "yes or no");
  if (choice === "yes") {
    money += 100;
    upgradeToStarvingStudents();
    batteryPoweredLawnmower();
  } else {
    alert ("come back tmr!!!");
    batteryPoweredLawnmower();
  }
}

const starvingStudents = () => {
  showStatus();
  const choice = prompt ("Do you want to work today with a team of starving students???", "yes or no");
  if (choice === "yes") {
    money += 250;
    youWinTheGame();
    starvingStudents();
  } else {
    alert ("come back tmr!!!");
    starvingStudents();
  }
}

const gameOver = () => {
  alert ("GAME OVER");
  const choice = prompt ("Would you like to restart the game?", "yes or no");
  if (choice === "yes") {
    alert ("lets start from the begining!!!");
    start();
  } else {
    byebye();
  }
}

start();
gg(); 

