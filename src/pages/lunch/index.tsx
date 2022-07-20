import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
// * MUI IMPORTS
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeletons from "../../components/Skeletons";
// * IMPORT FUNC
import { LunchFormContext } from "../../context/LunchFormContext";
// * ICON/ASSETS IMPORTS
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
// * UTILS IMPORTS
import { ILunch } from "../../utils/interfaces/lunch.interface";
import { paths } from "../../routes/paths";

const CardContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
  padding: "20px",
}));

const Lunch: React.FC = () => {
  const navigate = useNavigate();

  // const { lunchList, isLoading } = useContext(LunchFormContext);

  return (
    // <Grid container spacing={2}>
    //   <Grid
    //     item
    //     xs={12}
    //     container
    //     justifyContent="space-between"
    //     alignContent="center"
    //   >
    //     <Typography align="center" variant="h4">
    //       Lunch List
    //     </Typography>

    //     <Button
    //       variant="contained"
    //       size="medium"
    //       onClick={() => navigate(paths.addLunch)}
    //     >
    //       ADD BOOK
    //     </Button>
    //   </Grid>
    //   {!isLoading && lunchList !== null && lunchList.length === 0 && (
    //     <Grid item xs={12}>
    //       <Typography variant="h6">No lunch available</Typography>
    //     </Grid>
    //   )}
    //   {isLoading ? (
    //     <Grid item xs={12}>
    //       <Skeletons count={5} />
    //     </Grid>
    //   ) : (
    //     lunchList &&
    //     lunchList.length > 0 &&
    //     lunchList.map((lunch: ILunch) => (
    //       <Grid item xs={12} key={uuid()}>
    //         <Paper
    //           sx={{
    //             borderLeft: `5px solid ${
    //               lunch.available ? "#4BD66D" : "#D92525"
    //             }`,
    //           }}
    //         >
    //           <CardContent>
    //             <Typography variant="h6">{lunch.title}</Typography>
    //             <Button
    //               endIcon={<ArrowRightAltRoundedIcon />}
    //               onClick={() => navigate(paths.lunchDetails + lunch.lunch_id)}
    //             >
    //               {`View Lunch Details`}
    //             </Button>
    //           </CardContent>
    //         </Paper>
    //       </Grid>
    //     ))
    //   )}
    // </Grid>
    <></>
  );
};

export default Lunch;
