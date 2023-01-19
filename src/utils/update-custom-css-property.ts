export function updateCustomCssProperty(propName: string, value: string): void {
  const root = document.documentElement;

  root.style.setProperty(propName, value);
}
