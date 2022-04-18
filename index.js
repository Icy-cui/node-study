const fs = require("fs");

const path = require("path");

// fs.readFile(__dirname + "/2.txt", "utf8", function (err, data) {
//   if (err) {
//     return console.error(err);
//   }

//   const arrOld = data.split("\n");
//   const arrNew = [];

//   arrOld.forEach((item) => {
//     arrNew.push(item);
//   });

//   const arrStr = arrNew.join("\r\n");

//   console.log(arrStr);
// });

const rf = path.join(__dirname, "/files/example.html");

const regStyle = /<style>[\s\S]*<\/style>/g;
const regScript = /<script>[\s\S]*<\/script>/g;

fs.readFile(rf, "utf8", function (err, data) {
  if (err) {
    return console.error(err);
  }

  resolveCSS(data);
  resolveScript(data);
});

// extract css in example.html file

function resolveCSS(data) {
  const r1 = regStyle.exec(data);
  const newCss = r1[0].replace("<style>", "").replace("</style>", "");
//   console.log(r1);
  const wf = path.join(__dirname, "/files/index.css")
  fs.writeFile(wf, newCss, function(err){
    if (err) {
        return console.error(err);
      }
    return console.log('Write CSS file success');
  });
}

function resolveScript(data) {
    const r1 = regScript.exec(data);
    const newCss = r1[0].replace("<script>", "").replace("</script>", "");
  //   console.log(r1);
    const wf = path.join(__dirname, "/files/index.js")
    fs.writeFile(wf, newCss, function(err){
      if (err) {
          return console.error(err);
        }
      return console.log('Write js file success');
    });
  }
  