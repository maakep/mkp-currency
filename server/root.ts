function root (input: string = ""): string {
  let root = "../../";
  if (input[0] !== "/") {
    root += "/";
  }
  return root + input;
}
export default root;