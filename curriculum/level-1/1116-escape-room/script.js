function startGame() {
    let hasKey = false;
    let gameOver = false;

    alert("You find yourself locked in a small, dimly lit room.");
    alert("There is a door that is locked, and you need to find the key to escape.");
    alert("Be careful: there's a hole in the wall, and if you put your hand in it, you will die.");
    alert("Commands you can use: 'look', 'search', 'open door', 'put hand in hole', 'quit'.");

    while (!gameOver) {
        const command = prompt("What do you do?").trim().toLowerCase();

        switch (command) {
            case 'look':
                if (hasKey) {
                    alert("The room is small and dimly lit. The door is locked, and there is a hole in the wall.");
                } else {
                    alert("The room is small and dimly lit. There is a door that is locked and a hole in the wall.");
                }
                break;

            case 'search':
                if (!hasKey) {
                    alert("You search the room thoroughly and find a key hidden under a loose floorboard.");
                    hasKey = true;
                } else {
                    alert("You have already found the key. There is nothing more to find.");
                }
                break;

            case 'open door':
                if (hasKey) {
                    alert("You unlock the door with the key and escape the room. Congratulations, you have won!");
                    gameOver = true;
                } else {
                    alert("The door is locked. You need a key to open it.");
                }
                break;

            case 'put hand in hole':
                alert("You put your hand in the hole. A trap is triggered, and you die. Game over!");
                gameOver = true;
                break;

            case 'quit':
                alert("You decide to quit the game. Goodbye!");
                gameOver = true;
                break;

            default:
                alert("I don't understand that command. Try 'look', 'search', 'open door', 'put hand in hole', or 'quit'.");
                break;
        }
    }
}
