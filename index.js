const inquire = require('inquirer')
const {generateHTML} = require('./utils/teamBuilder')

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
        message: 'Please input email address',
        name: 'eMail',
        },{
        type: 'input',
        message: 'Please input office number',
        name: 'oficina',
        },
    ]
    inquire // asks the questions above and returns answers in an object
    .prompt(teamQs)
    .then((answers) => {
        addEngineerOrInter(answers)
    })
}
myTeamMembers()

function addEngineerOrInter(answers) {
    const temp = answers
    const eOIQs = [
        {
            type: 'list',
            message: 'Do you want to',
            name: 'eOI',
            choices: ['add an Engineer?','add an Intern?','finish building your team?']
        },
    ]
    inquire // asks the questions above and returns answers in an object
    .prompt(eOIQs)
    .then((answers) => {
        if (answers.eOI == 'add an Engineer?') {engineer(temp)}
        if (answers.eOI == 'add an Intern?') {intern(temp)}
        if (answers.eOI == 'finish building your team?') {generateHTML(temp)}
    })
}

function engineer(answers) {
    const temp = answers
    console.log(typeof temp)
    const eQs = [
        {
            type: 'input',
            message: 'Input Engineer\'s Name',
            name: 'engineer'
        },{
            type: 'input',
            message: 'Input Engineer\'s ID',
            name: 'engineerID'
        },{
            type: 'input',
            message: 'Input Engineer\'s eMail address',
            name: 'eeMail'
        },{
            type: 'input',
            message: 'Input Engineer\'s GitHub username',
            name: 'eGH'
        },
    ]
    inquire // asks the questions above and returns answers in an object
    .prompt(eQs)
    .then((answers) => {
    console.log(answers)
        console.log('Engineer')
        const merged = Object.assign({},temp,answers)
        addEngineerOrInter(merged)
    })
}

function intern(answers) {
    // WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    const temp = answers
    const iQs = [
        {
            type: 'input',
            message: 'What is the Intern\'s Name?',
            name: 'intern',
        },{
            type: 'input',
            message: 'What is the Intern\'s ID?',
            name: 'internID',
        },{
            type: 'input',
            message: 'What is the Intern\'s email address?',
            name: 'ieMail',
        },{
            type: 'input',
            message: 'What school does the Intern\'s attend?',
            name: 'iSchool',
        },
    ]
    inquire // asks the questions above and returns answers in an object
    .prompt(iQs)
    .then((answers) => {
    console.log(answers)
        console.log('Intern')
        const merged = Object.assign({},temp,answers)
        addEngineerOrInter(merged)
    })
}