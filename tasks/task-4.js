const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const mustache = require('mustache');


// ######################### //

async function compilingViaMustache(pathToData, pathToTemplate, pathToOutput) {

  // Step 1: save data from ".json"
  const json = await fs.readFileAsync(pathToData, { encoding: 'utf-8' });
  const view = JSON.parse(json);

  // Step 2: read template from ".mustache"
  const template = await fs.readFileAsync(pathToTemplate, { encoding: 'utf-8' });
  mustache.parse(template);

  // Step 3: compile template and save results
  const build = mustache.render(template, view);
  return fs.writeFileAsync(pathToOutput, build)
}

// ######################### //

module.exports = { compilingViaMustache };
