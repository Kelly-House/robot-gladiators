// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?"); 
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



// fight function
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// function to start game
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney= 10;
    
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));     
    
      var pickedEnemyName = enemyNames[i]; 

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else {
      window.alert("Youhave lost your robot in battle! Game Over!");
      break;
    }
  }
  // after loop ends, player is either out of health or enemies to fight
  endGame();
  // play again  
  
};

//function to end entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  //if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now hae a score of " + playerMoney + ".");
  }
  else {
    window.alert("You lost your robot in battle");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};


  


// start game when page loads 
startGame();

// Game States
// "WIN" - Player robot has defeated all enemy-robots.
//    * Fight all enemy-robots
//    * Defeat all enemy-robots
// "LOSE" - Player robot's health is zero or less


// Replay - would you like to play again? Wrap game logic in startGame()
// when player is defeated call an endGame(); that 1)alerts players total stats 2)ask if to play again 3)if yes, call startGame(); to restart game.



// SHOP - Would you like to purchase items from store - after player defeats or skips a robot and there are still some left to fight ask if player wants to 'shop', if no continnue normal, if yes call shop(); 
// in shop(); ask player if they want to 'refill' health 'upgrade' attack or 'leave' shop. 
// if refill, subtract money points from player and increase health
// if upgrade, subtract money points from player and increase health
// if leave alert goodbye and exit function
// if any other invalid option, call shop(); again
