import {
  Drawer,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import Groups2Icon from "@mui/icons-material/Groups2";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Drawer.css";
import { useEffect, useState } from "react";

const transitionDuration = 1000;

// interface people: {
//   name: string;
//   image: string;
//   checked: boolean;
// }
export const MuiDrawer = () => {
  const [participates, setParticipants] = useState<any[]>([]);

  useEffect(() => {
    let people = [
      {
        name: "Dagan Lev",
        image:
          "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
        checked: false,
      },
      {
        name: "Eden Elian",
        image:
          "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
        checked: true,
      },
      {
        name: "Yoni Yatziv",
        image:
          "https://icon2.cleanpng.com/20180523/wxj/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc2ee812.2252011515270566041921.jpg",
        checked: true,
      },
    ];
    setParticipants(people);
  }, []);

  const handleChange = (e: any) => {
    console.log(e.target);
    if (e.target.value == 1) {
      let person = {
        name: "Tom Levi",
        image:
          "https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png",
        checked: false,
      };
      setParticipants([...participates, person]);
    }
    if (e.target.value == 2) {
      let person = {
        name: "Tomer Cohen",
        image:
          "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
        checked: false,
      };
      setParticipants([...participates, person]);
    }
    if (e.target.value == 3) {
      let person = {
        name: "Tomi Tomi",
        image:
          "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
        checked: false,
      };
      setParticipants([...participates, person]);
    }
  };

  const handleRemove = (men: any) => {
    let array = participates.filter((person) => person.name !== men.name);
    setParticipants(array);
  };

  const handleCheck = (men: any) => {
    let array = participates;
    for (let i = 0; i < array.length; i++) {
      if (array[i].name == men.name) {
        array[i].checked = !array[i].checked;
        setParticipants([...array]);
      }
    }
  };

  let participatesUi = participates.map((men) => {
    return (
      <div className="personDiv">
        <img src={men.image} alt={men.name} className="menImage"></img>
        <p className="personName">{men.name}</p>
        {men.checked ? (
          <button
            className="button-3"
            role="button"
            onClick={() => handleCheck(men)}
          >
            Checked
          </button>
        ) : (
          <button
            className="button"
            role="button"
            onClick={() => handleCheck(men)}
          >
            Check In
          </button>
        )}
        <div className="personIcons">
          <WhatsAppIcon style={{ color: "green" }} />
          <DeleteOutlineIcon
            style={{ color: "red" }}
            onClick={() => handleRemove(men)}
          />
        </div>
      </div>
    );
  });

  return (
    <Drawer
      anchor="right"
      open={true}
      transitionDuration={{
        enter: transitionDuration,
        exit: transitionDuration,
      }}
    >
      <Box
        className="Box"
        p={2}
        width="600px"
        textAlign="center"
        role="presentation"
      >
        <div id="iconsDiv">
          <span>
            <ModeEditIcon />
            <p>Edit</p>
          </span>
          <span id="spanCancel">
            <CalendarMonthIcon />
            <p>Cancel class</p>
          </span>
        </div>
        <div id="divImage" style={{ textAlign: "center" }}>
          <img
            id="fitnessIcon"
            src="https://www.freeiconspng.com/thumbs/exercise-icon/exercise-icon-1.png"
            alt="icon"
          ></img>
          <h3>Workout of the day</h3>
        </div>
        <hr />
        <div id="containerDivs">
          <div>
            <PersonIcon className="icon" />
            <h6 className="smallH">Tom A</h6>
            <p className="smallP">Coach</p>
          </div>
          <div>
            <AccessTimeIcon className="icon" />
            <h6 className="smallH">16:15</h6>
            <p className="smallP">startTime</p>
          </div>
          <div>
            <Groups2Icon className="icon" />
            <h6 className="smallH">3/15</h6>
            <p className="smallP">Participants</p>
          </div>
        </div>
        <hr />
        <div id="divInfo">
          <h4>You Should Know...</h4>
          <h6>Dagan & Eden which participates in the class have a debt</h6>
        </div>
        <hr />
        <div id="dropdownDiv">
          <h6>Participants</h6>
          <FormControl style={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label">Add Client</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"Add Client"}
              label="Add Client"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={1}>
                <div className="menuItem">
                  <img
                    src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
                    className="imgItem"
                    alt="Tom Levi"
                  ></img>
                  Tom Levi
                </div>
              </MenuItem>
              <MenuItem value={2}>
                <div className="menuItem">
                  <img
                    src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                    className="imgItem"
                    alt="Tomer Cohen"
                  ></img>
                  Tomer Cohen
                </div>
              </MenuItem>
              <MenuItem value={3}>
                <div className="menuItem">
                  <img
                    src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
                    className="imgItem"
                    alt="Tomi Tomi"
                  ></img>
                  Tomi Tomi
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        {participatesUi}
      </Box>
    </Drawer>
  );
};
export default MuiDrawer;
