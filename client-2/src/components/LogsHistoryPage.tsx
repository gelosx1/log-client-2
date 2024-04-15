import { Container } from "@mui/material"
import DateTimePickers from "./DateTimePickers"
import LogsTable from "./LogsTable"

const LogsHistoryPage = () => {
    return (
        <Container sx={{display: "flex",width: "92vw", flexDirection: "column", gap: "3rem"}}>
            <DateTimePickers/>
            <LogsTable/>
        </Container>
    )
}

export default LogsHistoryPage