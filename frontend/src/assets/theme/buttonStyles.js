import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const btnStyles = makeStyles({
  root: {
    color: "white",
    transition: "0.5s",
    "&:disabled": {
      background: "lightgrey",
      boxShadow: "0 3px 5px 2px #bdbdbd",
    },
  },
  red: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      background: "linear-gradient(45deg, #d55a75 30%, #ed8854 90%)",
      boxShadow: "0 4px 8px 3px rgba(255, 105, 135, .3)",
    },
  },
  blue: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    "&:hover": {
      background: "linear-gradient(45deg, #1e89dd 30%, #3fbddb 90%)",
      boxShadow: "0 4px 8px 3px rgba(33, 203, 243, .3)",
    },
  },
});

export default function Hook() {
  const classes = btnStyles();
  return (
    <div>
      <Button
        sx={{ height: 40, width: 100 }}
        className={`${classes.root} ${classes.red}`}
      >
        Sign up
      </Button>
    </div>
  );
}
