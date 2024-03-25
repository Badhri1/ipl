function updateLiveScores() {
    // Example: Fetch live score data from an API
    // Replace this with your actual method of fetching live scores
    let liveScoresData = {
        match1: {
            team1: 'CSK',
            team2: 'RCB',
            score1: '180/5',
            score2: '140/6',
            winner: 'CSK'
        },
        match2: {
            team1: 'PBKS',
            team2: 'DC',
            score1: '120/3',
            score2: '130/4',
            winner: 'DC'
        },
        match3: {
            team1: 'KKR',
            team2: 'SRH',
            score1: '120/3',
            score2: '118/4',
            winner: 'KKR'
        },
        match4: {
            team1: 'RR',
            team2: 'LSG',
            score1: '191/3',
            score2: '192/4',
            winner:'LSG'
        },
        match5: {
            team1: 'MI',
            team2: 'GT',
            score1: '165/3',
            score2: '130/4',
            winner:'MI'
        },
        // Add data for matches up to 70
        // match3, match4, ..., match70
    };

    // Update the content of the live scores section
    let liveScoresSection = document.getElementById('live-scores');
    let liveScoresContent = '';

    // Loop through each match and add its data to the content
    for (let i = 1; i <= 70; i++) {
        let match = liveScoresData['match' + i];
        if (match) {
            liveScoresContent += '<h5 class="card-title">Match no-' + i + ' : ' + match.team1 + ' VS ' + match.team2 + '</h5>';
            liveScoresContent += '<p class="card-text">Team ' + match.team1 + ': ' + match.score1 + ' | Team ' + match.team2 + ': ' + match.score2 + '</p>';
            liveScoresContent += '<p class="card-text">Winner: ' + match.winner + '</p>';
        }
    }

    // Update the content of the live scores section
    liveScoresSection.querySelector('.card-body').innerHTML = liveScoresContent;

    // Update the last updated time
    let lastUpdatedFooter = liveScoresSection.querySelector('.card-footer');
    lastUpdatedFooter.textContent = 'Last Updated: ' + new Date().toLocaleTimeString();
} 

// Call the function to update live scores when the page loads
updateLiveScores();

// Optionally, set a timer to update live scores periodically
setInterval(updateLiveScores, 60000); // Update every 60 seconds (adjust as needed)


// Function to remove completed matches from the schedule
function removeCompletedMatchesManually() {
    // Get the table body element
    let tableBody = document.querySelector('#match-schedule tbody');

    // Get all rows in the table body
    let rows = tableBody.querySelectorAll('tr');

    // Get the current date and time
    let currentDate = new Date();

    // Loop through each row in the table
    rows.forEach(row => {
        // Get the match date and time from the row
        let matchDate = new Date(row.cells[2].innerText + ' ' + row.cells[4].innerText);

        // Compare the match date and time with the current date and time
        if (matchDate < currentDate) {
            // Remove the row if the match has already taken place
            row.remove();
        }
    });
}

// Call the function to remove completed matches manually
// You can call this function whenever you want to update the schedule
removeCompletedMatchesManually();

// Function to automatically remove completed matches after their scheduled time
function removeCompletedMatchesAutomatically() {
    // Get the table body element
    let tableBody = document.querySelector('#match-schedule tbody');

    // Get all rows in the table body
    let rows = tableBody.querySelectorAll('tr');

    // Get the current date and time
    let currentDate = new Date();

    // Loop through each row in the table
    rows.forEach(row => {
        // Get the match date and time from the row
        let matchDate = new Date(row.cells[2].innerText + ' ' + row.cells[4].innerText);

        // Compare the match date and time with the current date and time
        if (matchDate < currentDate) {
            // Remove the row if the match has already taken place
            row.remove();
        }
    });
}

// Call the function to remove completed matches automatically every minute
setInterval(removeCompletedMatchesAutomatically, 60000);

