var Nightmare = require('nightmare');
var nightmare = Nightmare();

nightmare
  .goto('https://www.premierleague.com/fixtures')
  .wait('.shortname')
  .evaluate(() => {
    let teams = document.querySelectorAll('.teams');
    teams = Object.values(teams).map(team => {
      team = team.innerText.split('\n')
      return {home:team[0], time: team[1], away: team[2]}
    });
    return teams
  })
  .end()
  .then(result => console.log("end", result))
  .catch(function (error) {
    console.error('Search failed:', error);
  });