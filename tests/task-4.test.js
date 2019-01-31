const fs = require('fs');
const path = require('path');
const assert = require('assert');
const task4 = require('../tasks/task-4');


describe('Testing "task-4" from "Javacript-Async"', () => {

  const projPathTo = require('./../proj/about').pathTo;

  const pathToData = path.join( __dirname, '../', projPathTo.jsonWithData );
  const pathToTemplate = path.join( __dirname, '../', projPathTo.mustacheTemplate );
  const pathToOutput = path.join( __dirname, '../', projPathTo.outputHtmlFile );

  it('should be sure that output file ".html" not exist', async () => {
    await fs.access(pathToOutput, error => {
      if (!error) fs.unlinkSync(pathToOutput);

      assert.equal( true, true );
    });
  });

  it('should successfully convert temmplate ".mustache" to output file ".html"', async () => {
    await task4.compilingViaMustache(pathToData, pathToTemplate, pathToOutput);

    await fs.access(pathToOutput, error => {
      const checking = (!error) ? true : false;
      assert.equal( checking, true );
    });
  });

});
