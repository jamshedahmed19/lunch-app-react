import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
//* MUI IMPORTS
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// * COMPONENTS IMPORTS
import InputField from "../../components/InputFields";
import PasswordField from "../../components/InputFields/PasswordField";
//* Add data/utils import below this comment
import { fieldNames } from "../../utils/constants/formConstants";
import { AuthContext } from "../../context/AuthContext";
import { Card } from "@mui/material";

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { values, isLoading, resetForm, handleInputChange, handleFormSubmit } =
    useContext(AuthContext);

  useEffect(() => {
    return () => {
      resetForm();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        margin: "0",
        padding: "0",
        height: "100vh",
        background:
          "linear-gradient(270deg, rgba(26,170,157,1) 0%, rgba(17,199,151,1) 45%, rgba(43,174,176,1) 86%, rgba(16,145,114,1) 100%)",
        overflowY: "hidden",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: "100%",
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "350px",
            }}
          >
            <CircularProgress size={80} />
          </Box>
        ) : (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
              padding: "50px 60px",
              borderRadius: "10px",
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} lg={12}>
                <Typography variant="h5" component="h1">
                  Login
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label={"Email"}
                  name={fieldNames.email}
                  value={values.email}
                  // error={errors.email !== "" ? true : false}
                  // helperText={errors.author}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <PasswordField
                  label={"Password"}
                  name={fieldNames.password}
                  value={values.password}
                  // helperText={errors.borrowed_by}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    onClick={() => handleFormSubmit()}
                  >
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        )}
      </Container>
    </Box>
  );
};

export default LoginPage;
