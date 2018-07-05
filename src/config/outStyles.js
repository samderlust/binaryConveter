import * as color from "../config/color";

export const showStyle = {
  flexDirection: "row",
  // minHeight: 80,
  flex: 2,
  width: "100%",
  marginTop: 2,
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  borderTopWidth: 2,
  paddingLeft: 5,
  paddingRight: 5,
  borderTopColor: "rgba(106, 107, 109, .1)"
};

export const binaryContainer = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.binaryColor,
  minHeight: 80
};

export const hexContainer = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.HexColor,
  minHeight: 80
};

export const octalContainer = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.octaColor,
  minHeight: 80
};

export const deciContainer = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.octaColor,
  minHeight: 80
};
