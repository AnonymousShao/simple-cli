"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _constants = require("./utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionMap = {
  install: {
    description: 'install template',
    alias: 'i',
    examples: ['my-cli i', 'my-cli install']
  },
  config: {
    description: 'config .myclirc',
    alias: 'c',
    examples: ['my-cli config set <k> <v>', 'my-cli config get <k>', 'my-cli config remove <k>']
  },
  '*': {
    description: 'not found',
    examples: []
  }
};
Object.keys(actionMap).forEach(function (key) {
  var action = actionMap[key];

  _commander.default.command(key).description(action.description).alias(action.alias).action(function () {
    console.log(key);
  });
});

function help() {
  console.log('\r\n  ', 'how to use command:');
  Object.keys(actionMap).forEach(function (action) {
    actionMap[action].examples.forEach(function (example) {
      console.log('    ' + example);
    });
  });
}

_commander.default.on('-h', help);

_commander.default.on('--help', help);

_commander.default.version(_constants.VERSION, '-v --version').parse(process.argv);

console.log('hello111142');