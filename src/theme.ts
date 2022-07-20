import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
});
