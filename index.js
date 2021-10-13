const inquire = require('inquirer')
const {Manager, mHTML, theEnd} = require('./lib/manager')
const {Engineer, eHTML} = require('./lib/engineer')
const {Intern, iHTML} = require('./lib/intern')
const team = []
let index = ''

function myTeamMembers() {
    const teamQs = [ //Manager Questions
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
        let newManager = new Manager(answers.teamM,answers.eID,answers.eMail,answers.oficina)
        team.push(newManager)
        index.concat(mHTML)
        addEngineerOrInter()
    })
}
myTeamMembers()

function addEngineerOrInter() { //asks if you want to add an Engineer, Intern, or finish
    const eOIQs = [ //Just one question
        {
            type: 'list',
            message: 'Do you want to',
            name: 'eOI',
            choices: ['add an Engineer?','add an Intern?','finish building your team?']
        },
    ]
    inquire 
    .prompt(eOIQs)
    .then((answers) => {
        if (answers.eOI == 'add an Engineer?') {engineer()}
        if (answers.eOI == 'add an Intern?') {intern()}
        if (answers.eOI == 'finish building your team?') {HTMLify()}
    })
}

function engineer() {
    const eQs = [ //Engineer Questions
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
        let newEngineer = new Engineer(answers.engineer,answers.engineerID,answers.eeMail,answers.eGH,)
        team.push(newEngineer)
        index.concat(eHTML)
        addEngineerOrInter()
    })
}

function intern() {
    const iQs = [ //Intern Questions
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
        let newIntern = new Intern(answers.intern,answers.internID,answers.ieMail,answers.iSchool)
        team.push(newIntern)
        index.concat(iHTML)
        addEngineerOrInter()
    })
}

function HTMLify() {
    index.concat(theEnd())
    putItInAFile()
}

function putItInAFile() {
    
}