// To Find The Top Scorer Of The Team
const players = [
    { name: 'Gopi', team: 'RR', runs: 350 },
    { name: 'Mahesh', team: 'SRH', runs: 420 },
    { name: 'Vinod', team: 'RCB', runs: 310 },
    { name: 'Anil Sir', team: 'KKR', runs: 470 },
    { name: 'Naveen', team: 'Panjab', runs: 390 },
    { name: 'Venky', team: 'Gujarath', runs: 280 },
    { name: 'Sesi', team: 'CSK', runs: 450 },
    { name: 'Chintu', team: 'MI', runs: 290 },
    { name: 'Suresh', team: 'Delhi', runs: 330 }
];
// Write The Function
function getTopScorers(players) {
    // Sort the players array by runs in descending order
    players.sort((highScore, lowScore) => lowScore.runs - highScore.runs);

    const topScorers = players.slice(0, 2);// Select the top 2 players By Using Slice Method

    return topScorers;
}

const topScorers = getTopScorers(players);
console.log(topScorers);