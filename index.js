const inquire = require('inquirer') //to ask questions
const fs = require('fs')//to manipulate files
const Manager = require('./lib/Manager') //My classes
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const {eHTML,mHTML,iHTML,theEnd} = require('./src/generateHTML')//My functions
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
        index = index.concat(mHTML(newManager))
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
    .then((answers) => { //calls the function of which one you want to add
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
    .then((answers) => {//creates a new Engineer with the answers above
        let newEngineer = new Engineer(answers.engineer,answers.engineerID,answers.eeMail,answers.eGH,)
        index = index.concat(eHTML(newEngineer))//uses that newEngineer to generate the HTML and appends it
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
    .then((answers) => {// uses the answers above to create a newIntern
        let newIntern = new Intern(answers.intern,answers.internID,answers.ieMail,answers.iSchool)
        index = index.concat(iHTML(newIntern))// uses that construct to create HTML and appends it
        addEngineerOrInter()
    })
}

function HTMLify() { //finishes off the HTML file and calls the writing function
    index.concat(theEnd())
    putItInAFile()
}

function putItInAFile() { //this outputs the HTML to a file in the dist folder
    fs.writeFile('./dist/index.html',index,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
}