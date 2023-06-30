export default function returnHowManyArguments(...args) {
  let len = 0;
  for (const arg of args) {
    len += 1;
  }
  return len;
}
