const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const assert = require('assert');
const task3 = require('../tasks/task-3');


describe('Testing "task-3" from "Javacript-Async"', () => {

  const projPathTo = require('./../proj/about').pathTo;

  const pathToData = path.join( __dirname, '../', projPathTo.jsonWithData );
  const pathToTemplate = path.join( __dirname, '../', projPathTo.mustacheTemplate );
  const pathToOutput = path.join( __dirname, '../', projPathTo.outputHtmlFile );

  it('should be sure that output file ".html" not exist', () => {
    // delete file if it exist
    const isExist = fs.existsSync(pathToOutput);
    if (isExist) fs.unlinkSync(pathToOutput);

    // check that file not exist
    const checking = fs.existsSync(pathToOutput);
    assert.equal( checking, false );
  });

  it('should successfully convert temmplate ".mustache" to output file ".html"', () => {
    task3.compilingViaMustache(pathToData, pathToTemplate, pathToOutput)
    .then(assert.equal( true, true ));
  });

});
