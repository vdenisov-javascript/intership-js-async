const assert = require('assert');
const task1 = require('../tasks/task-1');


describe('Testing "task-1" from "Javacript-Async"', () => {

  const dialogue = {
    'hello': ['hi', 'hello', 'salute'],
    'who are you ?': [ 'fine', 'good', 'bad' ],
    'what are you doing ?': ['learning js', 'watch movies', 'think about future']
  };

  it('should return correct respone if "phrase" in "dialogue"', () => {
    const phrase = 'hello';
    const answer = task1.sayToRobot(phrase, dialogue);

    assert.equal( dialogue[phrase].indexOf(answer) > -1, true );
  });

  it('should return "undefined" if "phrase" not in "dialogue"', () => {
    const phrase = 'robots are stupid';
    const answer = task1.sayToRobot(phrase, dialogue);

    assert.equal( answer, undefined );
  });

});
