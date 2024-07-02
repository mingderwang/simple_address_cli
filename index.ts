import { Command } from 'commander';

const program = new Command();

program
  .option('-n, --name <name>', 'Specify your name')
  .option('-a, --age <age>', 'Specify your age')
  .action((options) => {
    console.log('Hello, ' + options.name);
    console.log('You are ' + options.age + ' years old');
  });

program.parse(process.argv);
