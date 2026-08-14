const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

module.exports = () => {
  const dir = path.join(__dirname, "../content/works");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    return { ...data, body: content.trim() };
  });
};
