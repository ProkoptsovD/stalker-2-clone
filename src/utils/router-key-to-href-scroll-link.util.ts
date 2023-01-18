export function routerKeyToHrefScrollLink(
  key: string,
  options?: { delimiter?: string; joinSign?: string }
): string {
  const { delimiter, joinSign } = options ?? {};
  const del = delimiter ?? '';

  if (key.length === 1 || key === del) {
    return key;
  }

  return '#' + key.split(del).join('' ?? joinSign);
}
