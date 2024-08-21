const readline = require('readline-sync');

const enemies = ['Goblin', 'Orc', 'Troll', 'Wolf', 'Wizard'];
const items = [
    'Helmet',
    'Shoe',
    'Gold Coin',
    'Tooth',
    'Iron Shield'
];
const player = {
    name: '',
    hp: 100,
    inventory: []
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem() {
    return items[randomInt(0, items.length - 1)];
}

function printStatus() {
    console.log(`Name: ${player.name}`);
    console.log(`HP: ${player.hp}`);
    console.log(`Inventory: ${player.inventory.join(', ')}`);
}

function enemyEncounter() {
    const enemyName = enemies[randomInt(0, enemies.length - 1)];
    let enemyHp = randomInt(30, 50);

    console.log(`A wild ${enemyName} appears!`);
    
    while (player.hp > 0 && enemyHp > 0) {
        const action = readline.keyIn('Press "a" to attack or "r" to run: ', {limit: 'ar'});
        
        if (action === 'a') {
            // Player attacks
            const damage = randomInt(5, 15);
            enemyHp -= damage;
            console.log(`You attack the ${enemyName} for ${damage} damage.`);
            
            if (enemyHp <= 0) {
                console.log(`You have defeated the ${enemyName}!`);
                player.hp += 10; // Heal 10 HP
                const rewardItem = getRandomItem(); // Get a random item
                player.inventory.push(rewardItem); // Add item to inventory
                console.log(`You gained 10 HP and found a ${rewardItem}!`);
                return; // End the encounter
            }

            // Enemy attacks back
            const enemyDamage = randomInt(5, 15);
            player.hp -= enemyDamage;
            console.log(`The ${enemyName} attacks you for ${enemyDamage} damage.`);
            
            if (player.hp <= 0) {
                console.log(`You were defeated by the ${enemyName}.`);
                console.log("Looks like you ran out of health bud.");
                return; // End the game
            }
        } else if (action === 'r') {
            // Running away
            if (Math.random() < 0.5) {
                console.log(`You successfully escaped from the ${enemyName}.`);
                return; // End the encounter
            } else {
                console.log(`Failed to escape! The ${enemyName} attacks you.`);
                
                // Enemy attacks back
                const enemyDamage = randomInt(5, 15);
                player.hp -= enemyDamage;
                console.log(`The ${enemyName} attacks you for ${enemyDamage} damage.`);
                
                if (player.hp <= 0) {
                    console.log(`You were defeated by the ${enemyName}.`);
                    console.log("Looks like you ran out of health bud.");
                    return; // End the game
                }
            }
        }
    }
}

function gameLoop() {
    // Ask for player's name
    player.name = readline.question("Looks like you took a wrong turn at Albuqerque, What's your name?  ");
    console.log(`Welcome to the RPG game, ${player.name}!`);

    while (player.hp > 0) {
        const action = readline.keyIn('Press "w" to walk or "p" to print status: ', {limit: 'wp'});

        if (action === 'w') {
            console.log("You walk through the forest...");
            
            if (Math.random() < 1/4) {
                // Encounter an enemy
                enemyEncounter();
            } else {
                console.log("No enemies in sight. Continue walking.");
            }
        } else if (action === 'p') {
            printStatus();
        }
    }
}

// Start the game
gameLoop();
