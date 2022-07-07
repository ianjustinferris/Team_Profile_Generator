//Array to hold positions of Team Members
const myTeam = [];
//Unify array
const teamMembers = myTeam.join('')

//Create Manager card
function buildManager(m) {
    let manager =
        ` <div class='row row1'>
            <div class="card g-3" style="width: 13rem;">
                <section class="cardTop">
                    <h3>${m.getName}</h3>
                    <h4><i class="fa-solid fa-mug-hot"></i>${m.getRole}</h4>
                </section>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${m.getId}</li>
                            <li class="list-group-item">${m.getEmail}</li>
                            <li class="list-group-item">${m.getOffice}</li>
                        </ul>
                    </div>
            </div>
        </div>`;

    myTeam.push(manager);
    return myTeam;
}

//Create Engineer card/s
function buildEngineer(e) {
    let engineer =
        `<div class='row row1'>
            <div class="card g-3" style="width: 13rem;">
                <section class="cardTop">
                    <h3>${e.getName}</h3>
                    <h4><i class="fa-solid fa-mug-hot"></i>${e.getRole}</h4>
                </section>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${e.getId}</li>
                            <li class="list-group-item">${e.getEmail}</li>
                            <li class="list-group-item">${e.getGithub}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
    myTeam.push(engineer);
    return myTeam;
}

//Create Intern card/s
function buildIntern(i) {
    let intern =
        `<div class='row row1'>
            <div class="card g-3" style="width: 13rem;">
                <section class="cardTop">
                    <h3>${i.getName}</h3>
                    <h4><i class="fa-solid fa-mug-hot"></i>${i.getRole}</h4>
                </section>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${i.getId}</li>
                            <li class="list-group-item">${i.getEmail}</li>
                            <li class="list-group-item">${i.getSchool}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
    myTeam.push(intern);
    return myTeam;
}

//Call functions
function buildTeam(teamMembers) {
    buildManager(teamMembers.m);
    buildEngineer(teamMembers.e);
    buildIntern(teamMembers.i);

    return myTeam.join('')
}

//Pass buildTeam to HTML document
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
                    </html>`};

module.exports = buildPage;