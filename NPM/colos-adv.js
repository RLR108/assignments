const readlineSync = require('readline-sync');

const playerName = readlineSync.question('What is your name Jedi? ');

readlineSync.question('Hello ' + playerName + ', Welcome to Dooms Day! Where you will fight for your life to invade evil. Press Enter to begin.');

const evilGuys = ['Zombie', 'Storm Trooper', 'Evil Werewolf'];
const supplies = ['MedPack', 'Light Saber', 'The Force', 'Machine Gun'];
var prize = [];
let playerHealth = 100;
const options = ['Walk', 'Exit', 'Print'];
let pickUP = supplies[Math.floor(Math.random() * supplies.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) +5);
    const evilGuy = evilGuys[Math.floor(Math.random() * evilGuys.length)];
    let evilGuysHealth = 30;
    const evilGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, 'What will you do next?');

    if (options[index] == 'Exit') {
        return playerHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(playerName + ': \n' + playerHealth + '\nSupplies: ' + pickUP);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking....');
        } else if (key > .3) {
            console.log(evilGuy + ' appeared.');

            while(evilGuysHealth > 0 && playerHealth > 0) {

                const player = readlineSync.question('What do you want to do Jedi? Enter "r" to run or "a" to attack: ');

                switch (player){
                    case 'r': //if runawy is chosen
                        const run = Math.random();
                        if (run < .5) {
                            console.log('Ouch!! Before you ran away ' + evilGuy + ' attacks you with: ' + evilGuysPower);
                        } else {
                            console.log('You Ran Away!!');
                            break;
                        }
                    case 'a': //if attack is chosen
                        evilGuysHealth -= attackPower;
                        console.log('You attacked ' + evilGuy + ' with ' + attackPower + ' attack power');

                        playerHealth -= evilGuysPower;
                        console.log('Enemy just attacked you with:  ' + evilGuysPower + ' attack power');
                        
                        if (evilGuysHealth <= 0) {
                            console.log('You slaughtered ' + evilGuy + '.\n' + evilGuy + ' left you ' + pickUP + ' May the Force be with you!!');
                                let loot = Math.random();
                                if (loot <= .3){
                                    prize.push(pickUP);
                                } else if(playerHealth <= 0){
                                    console.log(evilGuy + ' has slaughtered you. You are strong but weak, now YOU ARE DEAD!');
                                }
                        }
                }
            }
        }
    }
}

while (playerHealth > 0){
    playerRestore = function(){
        playerActive = true;
        playerHealth = 100;
    };
    playerRestore();
    game();
}