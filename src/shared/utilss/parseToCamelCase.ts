export function parseToCamelCase(obj: Record<string, any>) {
  return JSON.parse(
    JSON.stringify(obj).replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    }),
  );
}
