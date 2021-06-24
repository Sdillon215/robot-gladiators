// Game states
// "WIN" - player robot has defeated all the enemy-robots
// * Fight all enemy robots
// * Defeat each enmeny robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames =["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    //   ask player if they want to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        
        //   subtract the value of playerAttack from enemyHealth and update enemyHealth var
        enemyHealth = enemyHealth - playerAttack;
        
        // log a resulting message to the console so we know that it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        // check enemyHealth
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // subtract the value of enemyAttack from playerHealth and update playerHealth var
        playerHealth = playerHealth - enemyAttack;
        
        // log a resulting message to the console so we know that it worked
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        // check playerHealth
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
    }
    
    // if player choses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to quit
        var confirmSkip = window.confirm("Are you sure you want to skip?");
        
        // if confirm leave fight 'if (confirmSkip)' is the same as 'if (confirmSkip === true)'
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            // subtract from playerMoney
            playerMoney = playerMoney -2;
        } 
        // if no ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}