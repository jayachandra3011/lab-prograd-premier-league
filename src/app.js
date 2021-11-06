//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager (managerName, managerAge, currentTeam, trophiesWon)  {
  let arr = [managerName, managerAge, currentTeam, trophiesWon]
  return arr
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation  (arr) 
{
  if (!arr.length) {
    return null
  }
  let a = [
    {
      'defender': arr[0],
      'midfield': arr[1],
      'forward': arr[2]
    }
  ]
  return a[0]
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut  (year)  {
  let arr = []
  for (const i of players)
  {
    if (i.debut == year)
    {
      arr.push(i)
    } 
  }
  return arr
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition  (position)  
{
  let arr = []
  for (const i of players)
  {
    if (i.position == position)
    {
      arr.push(i)
    } 
  }
  return arr
}

//Progression 5 - Filter players that have won ______ award
function filterByAward  (awardName) {
  let arr = []
  for (let i of players) {
    for (let j of i.awards) {
      if (j.name == awardName) {
        arr.push(i)
        break
      }
    }
  }
  return arr
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes  (awardName, noOfTimes)  {
  let arr = []
  for (let i of players) {
    let count = 0
    for (let j of i.awards) {
      if (j.name == awardName) {
        count += 1
      }
    }
    if (count == noOfTimes) {
      arr.push(i)
    }
  }
  return arr
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry  (awardName, country) {
  let arr = filterByAward(awardName)
  let arr2 = []
  for (let i of arr) {
    if (i.country == country) {
      arr2.push(i)
    }
  }
  return arr2
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge  (noOfAwards, team, age)  {
  let arr = []
  for (let i of players) {
    if (i.awards.length >= noOfAwards && i.team == team && i.age <= age) {
      arr.push(i)
    }
  }
  return arr
}
//Progression 9 - Sort players in descending order of their age
function SortByAge()
{
let temp=[];
for(var i=0;i<=players.length;i++)
{
  for(var j=i+1;j<=players.length;j++)
  {
    if(players[i].age<players[j].age)
    {
          temp[i]=players[i];
          players[i]=players[j];
          players[j]=temp[i];
    }
    temp.push(players[i]);
  }
}
return temp;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards() {
  let arr=[]; let noofawards=[];
  for(var i=0;i<=players.length;i++)
  {
     noofawards[i]=players[i].awards.length;
     players[i].push({"noOfAwards":noofawards[i]});
  }
  for(var i=0;i<=players.length;i++)
  { 
    if(players[i].team==team)
    for(var j=i+1;j<=players.length;j++)
    {
      if(players[i].noOfAwards<players[j].noOfAwards)
      {
        arr[i]=players[i];
        players[i]=players[j];
        players[j]=arr[i];
      }
      arr.push(players[i]);
    }
  }
  return arr;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order