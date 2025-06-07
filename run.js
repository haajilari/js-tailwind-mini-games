const { exec } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
if (!args.length) {
  console.log("Usage: node run.js <projectName>");
  process.exit(1);
}

const projectName = args[0];
const projectPath = path.join(__dirname, projectName);

exec(`http-server ${projectPath} -o`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(stdout);
});
