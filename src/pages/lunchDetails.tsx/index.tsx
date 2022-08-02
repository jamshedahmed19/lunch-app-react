import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
//* MUI IMPORTS
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// * COMPONENTS IMPORTS
import DetailsSkeletons from "../../components/Skeletons/DetailsSkeleton";
//* ASSETS / ICONS IMPORTS
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
// * FUNCS IMPORT
import { LunchFormContext } from "../../context/LunchFormContext";
// * UTILS
import { paths } from "../../routes/paths";

const CardContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
}));

const LunchDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isLoading, getLunch, lunchData, deleteLunch, addLunchItem } =
    useContext(LunchFormContext);

  useEffect(() => {
    if (id) {
      getLunch(id);
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Paper
        sx={
          {
            // borderLeft: `5px solid ${lunchData !== null ? lunchData.available ? "#4BD66D" : "#D92525" : "#878787"}`,
          }
        }
      >
        <Box p={4}>
          {isLoading ? (
            <DetailsSkeletons />
          ) : (
            lunchData && (
              <>
                {/* //   <FastfoodRoundedIcon fontSize="large" />
              //   <Typography variant="h4" component="h1">
              //     {lunchData.title}
              //   </Typography>
              //   <CardContent>
              //     <Typography variant="h6">
              //       Author: {lunchData.author}
              //     </Typography>
              //     <Typography variant="subtitle2">
              //       Date of borrow:{" "}
              //       {lunchData.date_of_borrow !== null
              //         ? lunchData.date_of_borrow.toString()
              //         : "NAN"}
              //     </Typography>
              //     <Typography variant="subtitle2">
              //       Expected date of return:{" "}
              //       {lunchData.expected_date_of_return !== null
              //         ? lunchData.expected_date_of_return.toString()
              //         : "NAN"}
              //     </Typography>
              //     <Typography variant="caption">
              //       Borrowed by: {lunchData.borrowed_by}
              //     </Typography>
              //   </CardContent> */}
              </>
            )
          )}
          <Box mt={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
            // onClick={() => navigate(paths.editLunch + lunchData?.lunch_id)}
            >
              <EditRoundedIcon />
            </IconButton>
            <IconButton
            // onClick={() => deleteLunch(lunchData?.lunch_id)}
            >
              <DeleteRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default LunchDetails;
