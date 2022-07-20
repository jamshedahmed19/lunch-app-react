import React, { useContext, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputField from "../../components/InputFields";
//* ICONS AND ASSETS
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
//* Add data/utils import below this comment
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";
import { fieldNames } from "../../utils/constants/formConstants";
import { ICellRendererParams } from "ag-grid-community";
import { LunchFormContext } from "../../context/LunchFormContext";

const AvalaibleCellRenderer: React.FC<ICellRendererParams> = (props) => {
  const cellValue = props.data;
  // const { values, handleDynamicInputChange } = useContext(LunchFormContext);
  // var index = values.timings.findIndex(timing => timing.day === cellValue.day);
  return (
    <Checkbox
      name={fieldNames.available}
      checked={true}
      // onChange={(e) => handleDynamicInputChange(e, index)}
    />
  );
};

const QuantityCellRenderer: React.FC<ICellRendererParams> = (props) => {
  const cellValue = props.data;
  console.log("cellValue", cellValue);
  const { incrementQuantity, decrementQuantity } = useContext(LunchFormContext);
  // var index = values.timings.findIndex(timing => timing.day === cellValue.day);
  return (
    <>
      <IconButton onClick={() => decrementQuantity(cellValue.menuItem_id)}>
        <RemoveCircleOutlineRoundedIcon />
      </IconButton>

      <InputField
        fullWidth={false}
        type="number"
        size="small"
        style={{
          margin: "5px",
          maxWidth: "100px",
        }}
        inputProps={{
          style: { textAlign: "center" },
        }}
        // name={fieldNames.duration}
        value={cellValue.quantity}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        //   handleDynamicInputChange(e, index)
        // }
      />
      <IconButton onClick={() => incrementQuantity(cellValue.menuItem_id)}>
        <AddCircleOutlineRoundedIcon />
      </IconButton>
    </>
  );
};

const AddLunchForm: React.FC = () => {
  const { menuList } = useContext(LunchFormContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gridApi, setGridApi] = useState<GridApi>();

  function onGridReady(params: GridReadyEvent) {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  }

  const ColStyles = { display: "flex", alignContent: "center", height: "80px" };

  //* ADD TABLE CELLS HERE
  const [columnDefs] = useState<ColDef[]>([
    {
      field: "available",
      cellRenderer: AvalaibleCellRenderer,
      width: 70,
      cellStyle: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      },
    },
    {
      field: "name",
      width: 100,
      cellStyle: { display: "flex", alignContent: "center" },
    },
    {
      field: "price",
      width: 100,
      cellStyle: { display: "flex", alignContent: "center" },
    },
    {
      field: "quanity",
      cellRenderer: QuantityCellRenderer,
      cellStyle: ColStyles,
    },
  ]);

  const defaultColDef = {
    resizable: true,
    filter: false,
    sortable: false,
    autoHeight: true,
  };

  return (
    <Box sx={{ margin: "40px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" component="h1">
            UPDATE LUNCH
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <div
            className="ag-theme-alpine"
            style={{ height: "500px", width: "auto", marginTop: "20px" }}
          >
            <AgGridReact
              onGridReady={onGridReady}
              rowData={menuList}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              suppressRowClickSelection={true}
              suppressCellFocus={true}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddLunchForm;
