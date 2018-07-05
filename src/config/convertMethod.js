export const decimalToOctal = decimal => {
  let num = 0;
  const octal = [];
  while (decimal >= 8) {
    num = decimal % 8;
    decimal = Math.floor(decimal / 8);
    octal.unshift(num);
  }
  octal.unshift(decimal);
  return octal.join("");
};

export const decimalToHeximal = decimal => {
  let num = 0;
  const hex = [];

  while (decimal >= 16) {
    num = checkHex(decimal % 16);
    decimal = Math.floor(decimal / 16);
    hex.unshift(num);
  }
  hex.unshift(checkHex(decimal));
  return hex.join("");
};

export const decimalToBinary = decimal => {
  let num = 0;
  decimal = Math.floor(decimal);
  const binary = [];
  while (decimal > 1) {
    num = decimal % 2;
    decimal = Math.floor(decimal / 2);
    binary.unshift(num);
  }
  binary.unshift(decimal);
  return binary.join("");
};

export const binaryToDecimal = binary => {
  let num = 0;
  const array = [...binary];
  array.reverse().map((bi, i) => {
    num += bi * Math.pow(2, i);
  });
  return num;
};

export const hexToDecimal = hex => {
  const hexArray = hex.split("");
  let num = 0;
  hexArray.reverse().map((h, i) => {
    num += switchHexToDecimal(h) * Math.pow(16, i);
  });
  return num;
};

export const octalToDecimal = octal => {
  const octalArray = octal.split("");
  let num = 0;
  octalArray.reverse().map((o, i) => {
    num += o * Math.pow(8, i);
  });
  return num;
};

const switchHexToDecimal = hex => {
  switch (hex) {
    case "A":
    case "a":
      return 10;
    case "B":
    case "b":
      return 11;
    case "C":
    case "c":
      return 12;
    case "D":
    case "d":
      return 13;
    case "E":
    case "e":
      return 14;
    case "F":
    case "f":
      return 15;
    default:
      return Number(hex);
  }
};

export const binaryToHex = num => {
  num = Number(num);
  switch (num) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 10:
      return 2;
    case 11:
      return 3;
    case 100:
      return 4;
    case 101:
      return 5;
    case 110:
      return 6;
    case 111:
      return 7;
    case 1000:
      return 8;
    case 1001:
      return 9;
    case 1010:
      return "A";
    case 1011:
      return "B";
    case 1100:
      return "C";
    case 1101:
      return "D";
    case 1110:
      return "E";
    case 1111:
      return "F";
    default:
      return num;
  }
};

const checkHex = number => {
  let num = Number(number);
  switch (num) {
    case 10:
      return (num = "A");
    case 11:
      return (num = "B");
    case 12:
      return (num = "C");
    case 13:
      return (num = "D");
    case 14:
      return (num = "E");
    case 15:
      return (num = "F");
    default:
      return num;
  }
};
