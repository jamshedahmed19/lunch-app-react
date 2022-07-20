import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
//* MUI IMPORTS
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
// * COMPONENTS IMPORTS
//* Add data/utils import below this comment
import AddLunchForm from "../AdminTable/DoctorTimingTable";

interface IAddEditLunchFormProps {
  formType: "Add" | "Edit";
}

const AddEditLunchForm: React.FC<IAddEditLunchFormProps> = ({ formType }) => {

  return (
    <>
      {(formType === "Edit") ? (
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
        <Box sx={{ margin: "50px" }}>
          <AddLunchForm />
        </Box>
      )}
    </>
  );
};

export default AddEditLunchForm;
