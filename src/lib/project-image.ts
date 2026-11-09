import fs from "node:fs";
import path from "node:path";

/**
 * Build-time check: does this project screenshot exist in public/projects/?
 * Server-only (uses fs) — never import from a "use client" file.
 * Missing files fall back to a text panel instead of a broken <Image>.
 */
export function projectImageExists(filename: string): boolean {
  if (!filename) return false;
  const filePath = path.join(
    process.cwd(),
    "public",
    "projects",
    path.basename(filename)
  );
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}
