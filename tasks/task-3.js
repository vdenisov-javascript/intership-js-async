const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));
const mustache = require('mustache');


// ######################### //

function compilingViaMustache(pathToData, pathToTemplate, pathToOutput) {

  // Step 1: save data from ".json"
  fs.readFileAsync(pathToData, { encoding: 'utf-8' })
  .then(json => {

    const view = JSON.parse(json);

    // Step 2: read template from ".mustache"
    fs.readFileAsync(pathToTemplate, { encoding: 'utf-8' })
    .then(template => {

      // Step 3: parse template
      mustache.parse(template);

      // Step 4: compile template with data
      const build = mustache.render(template, view);

      // Step 5: save compiled result
      fs.writeFileAsync(pathToOutput, build)
      .catch(error => { if (error) throw error });

    })
    .catch(error => { if (error) throw error });

  })
  .catch(error => { if (error) throw error });

}

// ######################### //

module.exports = { compilingViaMustache };
