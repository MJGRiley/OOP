function mHTML(manager) {
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        </head>
        <header>  
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">My team</a>
                    </ul>
                </div>
           </nav>
        </header>
        <body>
            <main>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">${manager.getName()}</span>
                                <p>${manager.getRole()}</p>
                                <div class="card-action">
                                    <p>Employee ID: ${manager.getID()}</p>
                                    <p>Office Number: ${manager.getOfficeNumber()}</p>
                                    <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`
}

function eHTML(engineer){
    return `
<div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${engineer.getName()}</span>
                <p>${engineer.getRole()}</p>
                <div class="card-action">
                    <p>Employee ID: ${engineer.getID()}</p>
                    <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    <br>
                    <a href="${engineer.getGitHub()}">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</div>
`
}

function iHTML(intern) {
    return`
<div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${intern.getName()}</span>
                <p>${intern.getRole()}</p>
                <div class="card-action">
                    <p>Employee ID: ${intern.getID()}</p>
                    <p>School: ${intern.getSchool()}</p>
                    <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                </div>
            </div>
        </div>
    </div>
</div>
`
}

function theEnd(){
return `
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
/<main>
</body>
</html>`
}

module.exports = {eHTML,mHTML,iHTML,theEnd}