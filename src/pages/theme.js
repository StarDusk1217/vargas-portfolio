// theme.js
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "600px", // mobile max
  md: "1024px", // tablet max
  lg: "1440px", // desktop max
};

const theme = extendTheme({ breakpoints });

export default theme;
