
//Create Manager card
function buildManager(manager) {
    return ` 
    <div class='row row1'>
            <div class="card g-3" style="width: 13rem;">
                <section class="cardTop">
                    <h3>${manager.getName}</h3>
                    <h4><i class="fa-solid fa-mug-hot"></i>${manager.getRole}</h4>
                </section>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${manager.getId}</li>
                            <li class="list-group-item">${manager.getEmail}</li>
                            <li class="list-group-item">${manager.getOffice}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
}

//Create Engineer card/s
function buildEngineer(engineers) {
    const htmlEngineer = engineers.map((engineer) => {
        `<div class='row row1'>
            <div class="card g-3" style="width: 13rem;">
                <section class="cardTop">
                    <h3>${engineer.getName}</h3>
                    <h4><i class="fa-solid fa-mug-hot"></i>${engineer.getRole}</h4>
                </section>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${engineer.getId}</li>
                            <li class="list-group-item">${engineer.getEmail}</li>
                            <li class="list-group-item">${engineer.getGithub}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
    })
    return htmlEngineer.join('');
}

//Create Intern card/s
function buildIntern(interns) {
    const htmlIntern = interns.map((intern) => {
        `<div class='row row1'>
            <div class="card g-3" style="width: 13rem;">
                <section class="cardTop">
                    <h3>${intern.getName}</h3>
                    <h4><i class="fa-solid fa-mug-hot"></i>${intern.getRole}</h4>
                </section>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${intern.getId}</li>
                            <li class="list-group-item">${intern.getEmail}</li>
                            <li class="list-group-item">${intern.getSchool}</li>
                        </ul>
                    </div>
            </div>
        </div>`;

    })
    return htmlIntern.join('');
}

//Call functions as template literals. To be passed to buildPage()
function buildTeam(teamMembers) {
    return `
    ${buildManager(teamMembers)}
    ${buildEngineer(teamMembers.engineers)}
    ${buildIntern(teamMembers.interns)}
    `;
}

//Pass buildTeam() to full HTML document
function buildPage(teamMembers) {

    return `
    < !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <!-- CSS only -->
                        <script src="https://kit.fontawesome.com/b809147cb0.js" crossorigin="anonymous"></script>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                            <link href="https://fonts.cdnfonts.com/css/galatea" rel="stylesheet">
                                <link href="https://fonts.cdnfonts.com/css/galatea?styles=59980" rel="stylesheet">
                                    <link href="./assets/style.css" rel='stylesheet'>
                                        <title>Team Profile Generator</title>
                                    </head>
                                    <body>

                                        <div class='container main'>

                                            <header class="container header" id='header'><span id='teamLogo'><i class="fa-solid fa-people-group"></i></span>MY TEAM</header>
                                        
                                            ${buildTeam(teamMembers)}
                                        
                                        </div>
                                        <!-- JavaScript Bundle with Popper -->
                                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
                                    </body>
                    </html>`
};

module.exports = buildPage;