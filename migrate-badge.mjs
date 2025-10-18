import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), "app"); // or "pages"

function replaceAnchorWithLink(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Skip if already imported
  if (!content.includes('import Link from "next/link"')) {
    content = `import Link from "next/link";\n${content}`;
  }

  // Replace <a href="...">...</a> with <Link href="...">...</Link>
  content = content.replace(/<a\s+href=["'](.+?)["']>([\s\S]*?)<\/a>/g, (match, href, inner) => {
    return `<Link href="${href}">${inner}</Link>`;
  });

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Updated ${filePath}`);
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".jsx")) {
      replaceAnchorWithLink(fullPath);
    }
  });
}

traverseDir(appDir);
console.log("All <a> tags replaced with Next.js <Link>.");
