'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(chalk.green(
      'Welcome to the a generaor to create a JavaScript library!'
    ));

    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'What is your project name',
      default : this.appname // Default to current folder name
    }]).then((answers) => {
      this.log('The project name is: ', answers.name);
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('*'),
      this.destinationRoot(),
      {globOptions: {dot: true}}
    );
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
    this.fs.copy(
      this.templatePath('__tests__'),
      this.destinationPath('__tests__')
    );
    this.fs.copy(
      this.templatePath('examples'),
      this.destinationPath('examples')
    );
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    });
  }

  end() {
    this.log(chalk.green(
      'We are done!'
    ));
  }
};