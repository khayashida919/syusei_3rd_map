/**
 * オブジェクトのキー名をUpperCamelのstringにして返します
 * @param name
 * @returns
 */
export const nameof = <T>(name: Extract<keyof T, string>): string =>
  `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
