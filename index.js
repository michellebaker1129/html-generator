const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?",
    },
    {
      type: 'input',
      name: 'location',
      message: "What's your location?",
    },
    {
        type: 'input',
        name: 'bio',
        message: "Input your biography here:",
      },
      {
        type: 'input',
        name: 'linkedinURL',
        message: "What's your LinkedIn URL?",
      },
      {
        type: 'input',
        name: 'githubURL',
        message: "What's your GitHub URL?",
      }
]).then((answers) => {
    const name = answers.name;
    const location = answers.location;
    const bio = answers.bio;
    const linkedin = answers.linkedinURL;
    const github = answers.githubURL;
    


function generateHTML(name, location, bio, linkedin, github) {
    return `
    <html>
      <head>
        <title>${name}'s Portfolio</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>${name}</h1>
        <h2>${location}</h2>
        <p>${bio}</p>
        <a href="${linkedin}">LinkedIn</a><br>
        <a href="${github}">GitHub</a>
      </body>
      <script src="index.js"></script>
    </html>
  `;
}

const html = generateHTML(name, location, bio, linkedin, github);

fs.writeFile('newPortfolioPage.html', html, (err) => {
    if(err) throw err;
    console.log('Your portfolio has been created!');
});
});
