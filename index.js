const fs = require("fs");
const path = require("path");

/**
 * Extract css from example.html file
 * @param {*} data
 */
function resolveCSS(data) {
  const r1 = regStyle.exec(data);
  const newCss = r1[0].replace("<style>", "").replace("</style>", "");
  //   console.log(r1);
  const wf = path.join(__dirname, "/files/index.css");
  fs.writeFile(wf, newCss, function (err) {
    if (err) {
      return console.error(err);
    }
    return console.log("Write CSS file success");
  });
}

/**
 * Extract script from example.html file
 * @param {*} data
 */
function resolveScript(data) {
  const r1 = regScript.exec(data);
  const newJs = r1[0].replace("<script>", "").replace("</script>", "");
  //   console.log(r1);
  const wf = path.join(__dirname, "/files/index.js");
  fs.writeFile(wf, newJs, function (err) {
    if (err) {
      return console.error(err);
    }
    return console.log("Write js file success");
  });
}

/**
 * Modify HTML from example.html file
 * @param {*} data
 */
function resolveHTML(data) {
  const newHTML = data
    .replace(
      regStyle,
      "<link rel='stylesheet' href='index.css' type='text/css' />"
    )
    .replace(
      regScript,
      "<script src='index.js' type='text/javascript'></script>"
    );
  const wf = path.join(__dirname, "/files/exampleModified.html");
  fs.writeFile(wf, newHTML, function (err) {
    if (err) {
      return console.error(err);
    }
    return console.log("Write CSS file success");
  });
}

const regStyle = /<style>[\s\S]*<\/style>/g; // css tag regexp
const regScript = /<script>[\s\S]*<\/script>/g; // script tag regexp

// read html file
const rf = path.join(__dirname, "/files/example.html");

fs.readFile(rf, "utf8", function (err, data) {
  if (err) {
    return console.error(err);
  }
  resolveCSS(data);
  resolveScript(data);
  resolveHTML(data);
});
