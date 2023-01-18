export function hasPathInURL(path: string, url: string): boolean {
  return url.toLocaleLowerCase().includes(path.toLocaleLowerCase());
}
