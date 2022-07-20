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
import LunchList from "../../sections/LunchList";
import MenuItems from "../../sections/MenuItems";
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

const UpdateLunch: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isLoading, getLunch, lunchData, deleteLunch } =
    useContext(LunchFormContext);

  useEffect(() => {
    if (id) {
      getLunch(id);
    }
    // eslint-disable-next-line
  }, [id]);

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.style.background = "#7f8082";
  };

  // const drop = (event: any) => {
  //   event.preventDefault();
  //   // const data = event.dataTransfer.getData("text/plain");
  //     // const element = document.querySelector(`#${data}`);
  //     // event.currentTarget.style.background = "white";
  //     // try {
  //     //   event.target.appendChild(element);
  //     // } catch (error) {
  //     //   console.warn("you can't move the item to the same place");
  //     // }
  // };

  return (
    <Grid container spacing={5} justifyContent="center">
      <Grid item xs={12} lg={8}>
        <LunchList />
      </Grid>
      <Grid item xs={12} lg={4}>
        <MenuItems />
      </Grid>
    </Grid>
  );
};

export default UpdateLunch;
