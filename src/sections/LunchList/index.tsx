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
import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
// * COMPONENTS IMPORTS
import DetailsSkeletons from "../../components/Skeletons/DetailsSkeleton";
//* ASSETS / ICONS IMPORTS
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DoNotDisturbAltRoundedIcon from "@mui/icons-material/DoNotDisturbAltRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import SnackIcon from "../../assets/icons/snack.png";
import EmptyIcon from "../../assets/icons/prohibition.png";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
// * FUNCS IMPORT
import { LunchFormContext } from "../../context/LunchFormContext";
// * UTILS
import { paths } from "../../routes/paths";
import ReactDOM from "react-dom/client";
import InputField from "../../components/InputFields";
import { MenuItem, Select } from "@mui/material";

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", transform: "rotate(90deg)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing(1),
  },
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
}));

const StyledListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
  "& .MuiListItem .MuiListItem-container": {
    "&::after": {
      content: "'Paid'",
      display: "block",
      transform: "rotate(90deg)",
      backgroundColor: "red",
      color: "white",
      padding: "5px",
      marginLeft: "10px",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      fontSize: "10px",
    },
  },
}));

const LunchList: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, deleteLunch, lunchData, addLunchItem } =
    useContext(LunchFormContext);
  const [element, setElement] = useState<any>([`<div></div>`]);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [lunchItem, setLunchItem] = React.useState<number | null>(null);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleAccordionDragOver = (event: any, panel: string) => {
    const data = event.dataTransfer.getData("todoId");
    if (data === panel) {
      setExpanded(panel);
    }
  };
  const { id } = useParams<{ id: string }>();
  const { getLunch } = useContext(LunchFormContext);

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
      <div>
        {[...Array(10)].map((_, index) => (
            <Accordion
              key={index}
              draggable={true}
              expanded={expanded === `${index}`}
              id={`${index}`}
              onChange={handleChange(`${index}`)}
              disableGutters
              square={false}
              // onDragStart={(e: any) => dragStart(e, index.toString())}
              // onDragOver={(e) => handleAccordionDragOver(e, index.toString())}
            >
              <StyledAccordionSummary
                sx={{
                  pointerEvents: "none",
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      pointerEvents: "auto",
                    }}
                  />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    src="/broken-image.jpg"
                  />
                  <Typography
                    sx={{
                      margin: "0 10px",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                    }}
                    variant="body2"
                  >
                    Jamshed Ahmed {index}
                  </Typography>
                  <Chip
                    sx={{
                      margin: "0 5px",
                    }}
                    size="small"
                    color="success"
                    icon={<CheckCircleOutlineRoundedIcon />}
                    label="updated"
                  />
                  <Chip
                    sx={{
                      margin: "0 5px",
                    }}
                    size="small"
                    color="error"
                    icon={<HighlightOffRoundedIcon />}
                    label="not updated"
                  />
                  <Chip
                    sx={{
                      margin: "0 5px",
                    }}
                    size="small"
                    color="warning"
                    icon={<DoNotDisturbAltRoundedIcon />}
                    label="not ordering"
                  />
                </Box>
                <Box
                  sx={{
                    pointerEvents: "auto",
                  }}
                >
                  <Button
                    variant="text"
                    color="info"
                    endIcon={<AddRoundedIcon />}
                  >
                    Add Lunch
                  </Button>
                </Box>
              </StyledAccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    backgroundColor: lunchItem !== null ? "#fff" : "#eee",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "30px 0",
                    margin: "10px",
                  }}
                >
                  {lunchData[index].orderItems !== null && (
                    <List dense={true} sx={{ width: "100%" }}>
                      {lunchData[index].orderItems.map((_, _index) => (
                        <StyledListItem
                          key={_index}
                          divider
                          draggable
                          onDrag={(e: any) => dragStart(e, _index.toString())}
                          sx={{
                            padding: "15px 0",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            alignContent: "center",
                            "& .MuiListItem-container": {
                              "&::after": {
                                content: "'Paid'",
                                display: "block",
                                transform: "rotate(90deg)",
                                backgroundColor: "red",
                                color: "white",
                                padding: "5px",
                                marginLeft: "10px",
                                borderTopLeftRadius: "5px",
                                borderTopRightRadius: "5px",
                                fontSize: "10px",
                              },
                            },
                          }}
                        >
                          <Box
                            sx={{
                              padding: "0 15px",
                            }}
                          >
                            <InputField
                              select
                              size="small"
                              label="Food Item"
                              value={"1"}
                              sx={{
                                width: "100%",
                              }}
                              inputProps={{
                                style: {
                                  textAlign: "center",
                                  fontSize: "12px",
                                },
                              }}
                            >
                              <MenuItem value="1">Chicken Biryani</MenuItem>
                              <MenuItem value="2">Chicken Pulao</MenuItem>
                              <MenuItem value="3">Raita</MenuItem>
                            </InputField>
                          </Box>
                          <ListItemSecondaryAction
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              alignContent: "center",
                            }}
                          >
                            <IconButton
                              size="small"
                              // onClick={() =>
                              //   decrementQuantity(cellValue.menuItem_id)
                              // }
                            >
                              <RemoveCircleOutlineRoundedIcon fontSize="small" />
                            </IconButton>

                            <InputField
                              fullWidth={false}
                              type="number"
                              size="small"
                              variant="outlined"
                              style={{
                                maxWidth: "100px",
                              }}
                              inputProps={{
                                style: {
                                  textAlign: "center",
                                  fontSize: "12px",
                                },
                              }}
                              // name={fieldNames.duration}
                              // value={cellValue.quantity}
                              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              //   handleDynamicInputChange(e, index)
                              // }
                            />
                            <IconButton
                              size="small"
                              // onClick={() =>
                              //   incrementQuantity(cellValue.menuItem_id)
                              // }
                            >
                              <AddCircleOutlineRoundedIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              color="error"
                              // onClick={
                              //   // deleteLunch(cellValue.menuItem_id)
                              // }
                            >
                              <DeleteOutlineRoundedIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </StyledListItem>
                      ))}
                    </List>
                  )}
                  {lunchData[index].orderItems !== null && (
                    <>
                      <img
                        height="80px"
                        src={EmptyIcon}
                        alt="Empty Order Icon"
                      />
                      <Typography
                        align="center"
                        variant="subtitle2"
                        color="textSecondary"
                        sx={{
                          margin: "10px 20px",
                          fontWeight: 400,
                        }}
                      >
                        No lunch added yet. Click on the button below to add
                        one.
                      </Typography>
                    </>
                  )}
                  <Button
                    onClick={() =>
                      addLunchItem(_index, {
                        selectedItem: {
                          name: "Chicken Biryani",
                          available: true,
                          price: 100,
                          quantity: 1,
                          category: "Chicken",
                        },
                        quantity: 1,
                      })
                    }
                  >
                    Add Lunch
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      <div
        id="drag-drop-container"
        style={{
          width: "800px",
          height: "500px",
        }}
        onDragOver={allowDrop}
        onDrop={drop}
        dangerouslySetInnerHTML={{
          __html:
            element !== null
              ? element
                  .map((item: any, index: any) => {
                    return `<div key=${index}>${item}</div>`;
                  })
                  .join("")
              : `<div></div>`,
        }}
      >
        {/* {element && element} */}
      </div>
    </Grid>
  );
};

export default LunchList;
