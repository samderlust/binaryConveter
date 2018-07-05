import * as method from "./convertMethod";

export default (switchMethods = (type, value) => {
  switch (type) {
    case "hex":
      return method.hexToDecimal(value);
    case "binary":
      return method.binaryToDecimal(value);
    case "octal":
      return method.octalToDecimal(value);
    case "decimal": {
      return {
        binary: method.decimalToBinary(value),
        hex: method.decimalToHeximal(value),
        octal: method.decimalToOctal(value),
        decimal: value
      };
    }
    default:
      return;
  }
});
