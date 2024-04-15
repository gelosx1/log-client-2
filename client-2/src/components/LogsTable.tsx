import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "time", headerName: "Time", width: 130 },
  {
    field: "description",
    headerName: "Description",
    width: 190,
  },
];

const LogsTable = () => {
  const { loadingLogs, dataLogs } = useSelector(
    (state: RootState) => state.loggerReducer
  );

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={dataLogs ?? []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
      {loadingLogs && <CircularProgress sx={{alignSelf: "center", marginTop: "3rem"}}/>}
    </Box>
  );
};

export default LogsTable;
