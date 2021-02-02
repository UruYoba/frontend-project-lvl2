import commander from 'commander';

const program = new commander.Command();
program
  .version('0.1.0')
  .arguments('<username> [password]')
  .description('test command', {
    username: 'user to login',
    password: 'password for user, if required',
  })
  .action((username, password) => {
    console.log('username:', username);
    console.log('environment:', password || 'no password given');
  });
program.parse();
