import program from 'commander';
import { VERSION } from './utils/constants';

const actionMap = {
  install: {
    description: 'install template',
    alias: 'i',
    examples: [
      'my-cli i',
      'my-cli install'
    ]
  }, config: {
    description: 'config .myclirc',
    alias: 'c',
    examples: [
      'my-cli config set <k> <v>',
      'my-cli config get <k>',
      'my-cli config remove <k>'
    ]
  },
  '*': {
    description: 'not found',
    examples: []
  }
};

Object.keys(actionMap).forEach(key => {
  const action = actionMap[key];
  program.command(key)
    .description(action.description)
    .alias(action.alias)
    .action(() => {
      console.log(key);
    });
});

function help() {
  console.log('\r\n  ', 'how to use command:');
  Object.keys(actionMap).forEach(action => {
    actionMap[action].examples.forEach(example => {
      console.log('    '+example);
    })
  })
}

program.on('-h', help);
program.on('--help', help);

program.version(VERSION, '-v --version').parse(process.argv);

console.log('hello111142');
