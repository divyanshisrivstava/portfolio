import fs from "fs";
import path from "path";

export function getAvailablePortfolios(): string[] {
  const portfoliosPath = path.join(process.cwd(), "content", "portfolio");
  
  if (!fs.existsSync(portfoliosPath)) {
    return [];
  }

  return fs.readdirSync(portfoliosPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

export function getAvailableProjects(): string[] {
  const projectsPath = path.join(process.cwd(), "content", "project");
  
  if (!fs.existsSync(projectsPath)) {
    return [];
  }

  return fs.readdirSync(projectsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}
