export function updateCustomCssProperty<T extends HTMLElement>(nodeElem: T) {
  return function (propName: string, value: string): void {
    nodeElem.style.setProperty(propName, value);
  };
}
