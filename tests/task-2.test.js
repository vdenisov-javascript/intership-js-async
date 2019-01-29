const fs = require('fs');
const path = require('path');
const assert = require('assert');
const task2 = require('../tasks/task-2');


describe('Testing "task-2" from "Javacript-Async"', () => {

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
    task2.compilingViaMustache(pathToData, pathToTemplate, pathToOutput);

    setTimeout(() => {
      const checking = fs.existsSync(pathToOutput);
      assert.equal( checking, true );
    }, 1500);
  });

});
