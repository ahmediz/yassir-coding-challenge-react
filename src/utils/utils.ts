export function checkPropertyMatchKeyword(
  item: any,
  propertyName: string,
  keyword: string | undefined
): boolean {

  eval(`console.log(${item})`)
  // const string = `item.propertyName.toLowerCase()
  // .startsWith(${keyword} && ${keyword}.toLowerCase())`;
  return false;
}
