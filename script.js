var createCandidate = function (name, color)
{

    var candidate = {};
    candidate.name = name;
    candidate.color = color;
    candidate.electionResults = null;
    candidate.totalVotes = 0;

    candidate.tallyVotes = function()
    {
        this.totalVotes = 0;

        for (var i = 0; i < this.electionResults.length; i++)
        {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
     };

    return candidate;
};

var rock = createCandidate ("Dwayne Johnson", [132,17,11]);
var yeezy = createCandidate ("Kanye West", [245,141,136]);

 console.log ("Rock is " + rock.color);
 console.log ("Yezzy is " + yeezy.color);


rock.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8,
  3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];

yeezy.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6,
  2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

  rock.tallyVotes();
  yeezy.tallyVotes();

  console.log (rock.totalVotes);
  console.log (yeezy.totalVotes);


var setStateResults = function(state)
{
  theStates[state].winner = null;

  if (rock.electionResults[state] > yeezy.electionResults[state]){
    theStates[state].winner = rock;
  }else if (rock.electionResults[state] < yeezy.electionResults[state]){
    theStates[state].winner = yeezy;
  };

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null){
  theStates[state].rgbColor = stateWinner.color;
}else {
  theStates[state].rgbColor = [11,32,57];
};

var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0];
var body = stateTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

var countryTable = document.getElementById("countryResults");

var row = countryTable.children[0].children[0];

row.children[0].innerText = rock.name;
row.children[1].innerText = rock.totalVotes;
row.children[2].innerText = yeezy.name;
row.children[3].innerText = yeezy.totalVotes;
row.children[5].innerText = winner;

stateName.innerText = theStates[state].nameFull;

abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = rock.name;
candidate2Name.innerText = yeezy.name;

candidate1Results.innerText = rock.electionResults[state];
candidate2Results.innerText = yeezy.electionResults[state];

  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}

};

var winner = "Who won?";

  if (rock.totalVotes > yeezy.totalVotes){
    winner = rock.name;
}else if (rock.totalVotes < yeezy.totalVotes){
    winner = yeezy.name;
}else{
    winner = "NOBODY!"
};

console.log("AND THE WEIRDEST PRESIDENT EVER IS..." + winner + "!!!");
