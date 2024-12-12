/**
 * Capitalize the first letter of a given string
 * @param input The string to capitalize
 * @returns A string with the first letter in uppercase
 */
export function capitalize(input: string): string {
  if (!input) return "";
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
