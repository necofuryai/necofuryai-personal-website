import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const contentFileExtensions = [".md", ".mdx"];

export function hasContentEntries(base: string): boolean {
  const absoluteBase = base.startsWith("/") ? base : join(process.cwd(), base.replace(/^\.\//, ""));
  return hasMatchingContentFile(absoluteBase);
}

function hasMatchingContentFile(directory: string): boolean {
  if (!existsSync(directory)) {
    return false;
  }

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory() && hasMatchingContentFile(entryPath)) {
      return true;
    }

    if (entry.isFile() && contentFileExtensions.some((extension) => entry.name.toLowerCase().endsWith(extension))) {
      return true;
    }
  }

  return false;
}
