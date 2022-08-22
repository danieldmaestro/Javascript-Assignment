// Team Dumebi Points saved as constants
const tDumebi1 = 97;
const tDumebi2 = 112;
const tDumebi3 = 101;
// Team Ciroma's Points saved as constants
const tCiroma1 = 109;
const tCiroma2 = 95;
const tCiroma3 = 106;
// Both team's average scores
const dumebiAvg = (tDumebi1 + tDumebi2 + tDumebi3) / 3;
const ciromaAvg = (tCiroma1 + tCiroma2 + tCiroma3) / 3;
// Minimum score parameter
const minimumScore = 100;

console.log(`Team Dumebi's average score is ${dumebiAvg}`);
console.log(`Team Ciroma's average score is ${ciromaAvg}`);

// If Team Dumebi Wins with a score above minimum score
if (dumebiAvg > minimumScore && dumebiAvg > ciromaAvg){
    console.log(`Team Dumebi wins the trophy with an average score of ${dumebiAvg}`);
} 
// If Team Ciroma wins with a score above minimum score
else if(ciromaAvg > minimumScore && ciromaAvg > dumebiAvg){
    console.log(`Team Ciroma wins the trophy with an average score of ${ciromaAvg}`);
} 
// If it ends in a draw with a score above minimum score
else if(ciromaAvg > minimumScore && ciromaAvg === dumebiAvg){
    console.log(`The competition ends in a draw and they share the trophy into two. LOL`);
} 
// If no one wins the trophy because the scores are below minimum
else{
    console.log(`No tema wins the trophy since they are both below the minimum score of ${minimumScore}`);
}