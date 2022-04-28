function sort(input) {
  return input.toString().toLowerCase().split("").sort().join("");
}

export class Anagram {
  value = "";
  constructor(input) {
    this.value = input;
  }

  matches(...input) {
    const result = [];
    for (const each of input) {
      if (sort(each) === sort(this.value)) {
        if (each.toLowerCase() === this.value.toLowerCase()) {
          continue;
        }
        result.push(each);
      }
    }
    return result;
  }
}
