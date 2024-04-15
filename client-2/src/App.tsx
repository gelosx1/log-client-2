import { Box } from "@mui/material";
import SystemLogin from "./components/SystemLogin";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import LogsHistoryPage from "./components/LogsHistoryPage";

function App() {
  const { loginData } = useSelector(
    (state: RootState) => state.loginReducer
  );

  return (
    <Box
      sx={{ width: "100vw",height: "75vh", alignItems: "center", justifyContent: "center" }}
    >
      <Header isWithLOgout={!!loginData?.token || !!localStorage.getItem("jwt")} />
      {!loginData?.token ? <SystemLogin /> : <LogsHistoryPage/>}
    </Box>
  );
}

export default App;
