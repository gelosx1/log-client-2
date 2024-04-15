import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getLogsAction } from "../actions/loginActions";
import { hoursFormat, dateFormat } from "../utils/constants";
const DateTimePickers = () => {
  const [startDateTime, setStartDateTime] = useState<Dayjs | null>(dayjs("2024-04-01T00:00"));
  const [endDateTime, setEndDateTime] = useState<Dayjs | null>(dayjs());
  const dispatch = useDispatch<AppDispatch>()
  const handleStartDateTime = (dateTime: Dayjs | null) => {
    dateTime && setStartDateTime(dateTime);
  };

  const handleEndDateTime = (dateTime: Dayjs | null) => {
    dateTime && setEndDateTime(dateTime);
  };

  const handleGetLogs = () => {
    if (startDateTime && endDateTime) {
      const startTime = startDateTime.format(hoursFormat);
      const startDate = startDateTime.format(dateFormat);
      const endTime = endDateTime.format(hoursFormat);
      const endDate = endDateTime.format(dateFormat);
      dispatch(getLogsAction({startDate, startTime, endDate, endTime})) 
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container
        sx={{
          display: "flex",
          maxWidth: "fit-content",
          gap: "3rem",
          justifyContent: "center",
        }}
      >
        <DateTimePicker
          label="Start Date & Time"
          defaultValue={dayjs("2024-04-01T00:00")}
          value={startDateTime}
          onChange={handleStartDateTime}
        />
        <DateTimePicker
          label="End Date & Time"
          defaultValue={dayjs()}
          value={endDateTime}
          onChange={handleEndDateTime}
        />
        <Button onClick={handleGetLogs}>Get Logs</Button>
      </Container>
    </LocalizationProvider>
  );
};

export default DateTimePickers;
