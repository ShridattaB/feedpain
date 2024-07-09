// ** React Imports
import { forwardRef } from "react";

// ** MUI Imports
import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle, useMediaQuery } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/system";

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

const CustomDialog = ({
  show = false,
  setShow,
  dialogContentComponent,
  dialogActionsComponent,
  dialogTitle,
  handelClose
}) => {

  const onClose = () => {
    setShow(false)
    handelClose()
  }
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      // fullWidth
      fullScreen={fullScreen}
      open={show}
      maxWidth="md"
      scroll="body"
      onClose={onClose}
      TransitionComponent={Transition}
      onBackdropClick={onClose}
    >
      <DialogContent>
        <IconButton
          size="small"
          onClick={onClose}
          sx={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          <CloseIcon />
        </IconButton>{" "}
        <DialogTitle style={{ paddingBottom: "0px" }}>
          {dialogTitle}
        </DialogTitle>
        {dialogContentComponent}
      </DialogContent>
      {dialogActionsComponent && (
        <DialogActions
          sx={{
            justifyContent: "center",
            px: (theme) => [
              `${theme.spacing(5)} !important`,
              `${theme.spacing(15)} !important`,
            ],
            pb: (theme) => [
              `${theme.spacing(8)} !important`,
              `${theme.spacing(12.5)} !important`,
            ],
          }}
        >
          {dialogActionsComponent}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomDialog;
