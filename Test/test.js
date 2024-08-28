const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'test',
    message: 'Is this prompt working?'
  }
]).then((answers) => {
  console.log('Prompt Answer:', answers.test);
});
