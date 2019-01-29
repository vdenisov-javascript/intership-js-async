const fs = require('fs');
const path = require('path');
const assert = require('assert');
const task3 = require('../tasks/task-3');


describe('Testing "task-3" from "Javacript-Async"', () => {

  const projPathTo = require('./../proj/about').pathTo;

  const pathToData = path.join( __dirname, '../', projPathTo.jsonWithData );
  const pathToTemplate = path.join( __dirname, '../', projPathTo.mustacheTemplate );
  const pathToOutput = path.join( __dirname, '../', projPathTo.outputHtmlFile );

  it('should be sure that output file ".html" not exist', () => {
    fs.access(pathToOutput, error => {
      if (!error) fs.unlinkSync(pathToOutput);

      assert.equal( true, true );
    });
  });

  it('should successfully convert temmplate ".mustache" to output file ".html"', () => {
    task3.compilingViaMustache(pathToData, pathToTemplate, pathToOutput);

    fs.access(pathToOutput, error => {
      const success = !!error;
      assert.equal( success, true );
    });
  });

});