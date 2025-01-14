export type ClassNamesMods = Record<string, boolean | string | undefined>;

export function classNames (
  cls: string,
  mods: ClassNamesMods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className]) => className),
  ].join(' ')
}