const assert = require('chai').assert;
const task1 = require('../tasks/task-1');


describe('Testing "task-1: EventEmitter" from "Javacript-Async"', () => {

  it('should return "string" type response to RECOGNIZED phrase', () => {
    task1.sayToRobot('hello')
    .then(answer => assert.typeOf(answer, 'string'));
  });

  it('should return "undefined" type response to UNrecognized phraseß', () => {
    task1.sayToRobot('robots are stupid')
    .then(answer => assert.typeOf(answer, 'undefined'));
  });

});
