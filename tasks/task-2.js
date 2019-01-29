const fs = require('fs');
const mustache = require('mustache');


// ######################### //

function compilingViaMustache(pathToData, pathToTemplate, pathToOutput) {
  // Step 1: save data from ".json"
  const view = JSON.parse(
    fs.readFileSync(pathToData, { encoding: 'utf-8' })
  );

  // Step 2: read template from ".mustache"
  fs.readFile(pathToTemplate, { encoding: 'utf-8' }, (error, template) => {
    if (error) throw error;

    // Step 3: parse template
    mustache.parse(template);

    // Step 4: compile template with data
    const build = mustache.render(template, view);

    // Step 5: save compiled result
    fs.writeFile(pathToOutput, build,
      error => { if (error) throw error }
    );
  });
}

// ######################### //

module.exports = { compilingViaMustache };
