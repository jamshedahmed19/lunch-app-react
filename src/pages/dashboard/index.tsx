import React from "react";
import { useNavigate } from "react-router-dom";
//* MUI IMPORTS
import Grid from "@mui/material/Grid";
// * COMPONENTS IMPORTS
import CategoryCard from "../../components/CategoryCard";
//* ASSETS / ICONS IMPORTS
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
// * UTILS
import { paths } from "../../routes/paths";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6}>
        <CategoryCard
          title="Lunch"
          Icon={FastfoodRoundedIcon}
          handleClick={() => navigate(paths.addLunch)}
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
