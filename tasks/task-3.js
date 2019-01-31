const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));
const mustache = require('mustache');


// ######################### //

function compilingViaMustache(pathToData, pathToTemplate, pathToOutput) {
  let view, build;

  return fs.readFileAsync(pathToData, { encoding: 'utf-8' })
  .then(json => {
    // Step 1: save data from ".json"
    view = JSON.parse(json);

    // Step 2: read template from ".mustache"
    return fs.readFileAsync(pathToTemplate, { encoding: 'utf-8' });
  })
  .then(template => {
    // Step 3: parse template
    mustache.parse(template);

    // Step 4: compile template with data
    build = mustache.render(template, view);

    // Step 5: save compiled result
    return fs.writeFileAsync(pathToOutput, build);
  });
}

/** ↓↓↓ PROMISE HELL ↓↓↓ */

// function compilingViaMustache(pathToData, pathToTemplate, pathToOutput) {

//   return new Promise((resolve, reject) => {

//     // Step 1: save data from ".json"
//     fs.readFileAsync(pathToData, { encoding: 'utf-8' })
//     .then(json => {

//       const view = JSON.parse(json);

//       // Step 2: read template from ".mustache"
//       fs.readFileAsync(pathToTemplate, { encoding: 'utf-8' })
//       .then(template => {

//         // Step 3: parse template
//         mustache.parse(template);

//         // Step 4: compile template with data
//         const build = mustache.render(template, view);

//         // Step 5: save compiled result
//         fs.writeFileAsync(pathToOutput, build)
//         .catch(error => reject(error));

//         resolve(true);
//       })
//       .catch(error => reject(error));

//     })
//     .catch(error => reject(error));

//   });

// }

// ######################### //

module.exports = { compilingViaMustache };
