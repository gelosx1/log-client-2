import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { resetLoginState } from "../reducers/loginReducer";
import { resetLoggerState } from "../reducers/logsReducer";

const Header = ({isWithLOgout}: {isWithLOgout: boolean}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogOut = () => {
    dispatch(resetLoginState())
    dispatch(resetLoggerState())
    localStorage.removeItem("jwt")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{top: 0}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logs History
          </Typography>
          {isWithLOgout && <Button color="inherit" onClick={handleLogOut}>Log Out</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
