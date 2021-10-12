const inquire = require('inquirer')

function myTeamMembers() {
    const teamQs = [
        {
        type: 'input',
        message: 'What\'s the team manager\'s name?',
        name: 'teamM',
        },{
        type: 'input',
        message: 'Please input Employee ID',
        name: 'eID',
        },{
        type: 'input',
        message: 'Please input email address?',
        name: 'eMail',
        },{
        type: 'input',
        message: 'Please input office number?',
        name: 'oficina',
        },
    ]
    inquire // asks the questions above and returns answers in an object
    .prompt(teamQs)
    .then((answers) => {
        console.log(answers)
    })
}
myTeamMembers()

// WHEN I start the application
// I enter the team manager’s name, employee ID, email address, and office number THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// prompted for my team members and their information





// WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username THEN that GitHub profile opens in a new tab

// WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu