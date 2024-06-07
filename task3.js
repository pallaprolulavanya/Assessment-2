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

function getPlayersByTeam(players, teamName) {
    return players.filter(player => player.team === teamName);
}

const teamName = 'CSK';  // Example team name to search for
const teamPlayers = getPlayersByTeam(players, teamName);
console.log(`Players in team ${teamName}:`, teamPlayers);