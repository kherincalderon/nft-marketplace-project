import { extendTheme } from "@chakra-ui/react";

export const colors = {
    blue: {
      500: "#0ACFFE",
      600: "#12BCFE",
      700: "#0592EC",
    },
    green: {
      500: "#3EAD3C",
    },
    red: {
      500: "#0acffe",
      600: "#0592ec",
    },
    text: {
      500: "#D4DCE3",
      600: "#BDC1D0",
      700: "#141518",
    },
  };
  
  export const theme = extendTheme({ colors });