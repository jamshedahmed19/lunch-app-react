import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//* MUI IMPORTS
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Avatar from "@mui/material/Avatar";
// * COMPONENTS IMPORTS
import DetailsSkeletons from "../../components/Skeletons/DetailsSkeleton";
//* ASSETS / ICONS IMPORTS

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// * FUNCS IMPORT
import { LunchFormContext } from "../../context/LunchFormContext";
// * UTILS
import { paths } from "../../routes/paths";
import { Button, Chip, ListItemSecondaryAction } from "@mui/material";
import ReactDOM from "react-dom/client";

const MenuItems: React.FC = () => {
  const navigate = useNavigate();
  const [element, setElement] = useState<any>([`<div></div>`]);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const { id } = useParams<{ id: string }>();
  const { isLoading, getLunch, lunchData, deleteLunch } =
    useContext(LunchFormContext);

  useEffect(() => {
    if (id) {
      getLunch(id);
    }
    // eslint-disable-next-line
  }, [id]);

  const dragStart = (event: any, id: string) => {
    event.dataTransfer.setData("todoId", id);
    console.log(event);
  };

  const allowDrop = (event: any) => {
    event.preventDefault();
    event.currentTarget.style.background = "#7f8082";
  };

  const drop = (event: any) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("todoId");
    const element = ReactDOM.createRoot(
      document.getElementById(data) as HTMLElement
    );
    // const element = document.querySelector(`#${data}`);
    console.log(data);
    console.log(element, "element");

    React.createElement("div", {}, "My First React Code");
    // @ts-ignore-start
    setElement([...element, element._internalRoot.containerInfo.innerHTML]);
    // event.target.appendChild(element._internalRoot.containerInfo.innerHTML);
    // @ts-ignore-end
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <List dense={true} sx={{ width: "100%" }}>
        <Paper>
          {[...Array(30)].map((_, index) => (
            <ListItem
              key={index}
              divider
              draggable
              onDrag={(e: any) => dragStart(e, index.toString())}
            >
              <ListItemText primary="Single-line item" />
              <ListItemSecondaryAction>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ fontWeight: "bold", marginRight: "10px" }}
                >
                  10
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ fontWeight: "bold" }}
                >
                  10
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Paper>
      </List>
    </Grid>
  );
};

export default MenuItems;
