export const flatten = <T extends object>(
  object: T,
  prefix = '',
): Record<string, unknown> => {
  const flatted: Record<string, unknown> = {};

  Object.keys(object).forEach((key) => {
    const pre = prefix.length ? prefix + '.' : '';
    const value = object[key as keyof T];
    if (typeof value === 'object' && value !== null) {
      Object.assign(flatted, flatten(value, pre + key));
    } else {
      flatted[pre + key] = value;
    }
  });

  return flatted;
};
