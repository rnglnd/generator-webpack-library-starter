'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    return this.log(chalk.green(
      'Welcome the generaor to create your next JavaScript library!'
    ));
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

  end() {
    this.log(chalk.green(
      'We are done!'
    ));
  }
};