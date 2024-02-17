import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { convertToSlug } from "../../../config/helperMethods";

export default function Categories({ categories, sendDataToParent }) {
  const [childInput, setChildInput] = React.useState("");

  const sendData = (e) => {
    // Call the function received from the parent and pass data
    sendDataToParent(e);
  };
  const [open, setOpen] = React.useState(
    new Array(categories.length).fill(false)
  );

  const handleClick = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        paddingLeft: "0px",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <ListItemButton
            style={{
              paddingLeft: "0px",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
            onClick={() => handleClick(index)}
          >
            <ListItemText style={{ fontSize: "8px" }} primary={category.name} />
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.subcategories.map((subCategory, nestedIndex) => (
                <ListItemButton
                  style={{
                    paddingLeft: "40px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingRight: "0px",
                  }}
                  key={nestedIndex}
                >
                  <ListItemText
                    style={{
                      paddingLeft: "0px",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                    }}
                    primary={subCategory}
                    onClick={() =>
                      // console.log(
                      //   subCategory,
                      //   category.name,
                      //   convertToSlug(`/${category.name}/${subCategory}`),
                      //   "SUBBB"
                      // )
                      sendData(
                        convertToSlug(`/${category.name}/${subCategory}`)
                      )
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
