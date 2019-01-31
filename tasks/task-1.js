const EventEmitter = require('events');
const _ = require('lodash');


class MrRobotEmitter extends EventEmitter {}

// ######################### //

const
  mrRobot = new MrRobotEmitter(),
  answers = [],
  dialoue = {
    greeting: [ 'hi', 'salute', 'what`s up ?' ],
    farewell: [ 'bye bye', 'orevuar', 'astalavista' ],
    status:   [ 'work', 'turnded off', 'broken' ],
  };

mrRobot.on('hello',   () => answers.push(   _.sample(dialoue.greeting)  ));
mrRobot.on('goodbye', () => answers.push(   _.sample(dialoue.farewell)  ));
mrRobot.on('ping',    () => answers.push(   _.sample(dialoue.status)    ));

async function sayToRobot(phrase) {
  const success = await mrRobot.emit(phrase);
  return (success) ? answers.shift() : undefined;
}

// ######################### //

module.exports = {
  sayToRobot,
};
