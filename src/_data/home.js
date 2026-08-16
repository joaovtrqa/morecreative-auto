const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = () => {
  const file = path.join(__dirname, "../content/home.yml");
  if (!fs.existsSync(file)) return {};
  return yaml.load(fs.readFileSync(file, "utf8"));
};
