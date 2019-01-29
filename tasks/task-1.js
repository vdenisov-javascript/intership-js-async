const EventEmitter = require('events');
const helpers = require('./helpers');


class MrRobotEmitter extends EventEmitter {}

// ######################### //

function sayToRobot(phrase, dialogue) {
  const mrRobot = new MrRobotEmitter();
  let answer;

  mrRobot.once(phrase, () => {
    answer = (dialogue.hasOwnProperty(phrase))
      ? helpers.getRandomElementFromArray( dialogue[phrase] )
      : undefined;
  });

  mrRobot.emit(phrase);
  return answer;
}

// ######################### //

module.exports = {
  sayToRobot,
};
