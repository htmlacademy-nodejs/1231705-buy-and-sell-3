'use strict';

const {Cli} = require(`./cli`);
const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode,
  MAX_COUNT
} = require(`../constants`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}

const generateCount = userArguments.slice(1);

if (generateCount < MAX_COUNT) {
  Cli[userCommand].run(generateCount);
} else {
  console.error(`Не больше ${MAX_COUNT} объявлений`);
  process.exit(ExitCode.error);
}
