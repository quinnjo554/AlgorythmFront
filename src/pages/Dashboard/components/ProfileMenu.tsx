import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar, Box } from "@mui/material";
import landingImg from "../../../../public/landingImg.jpg";
import Link from "next/link";
const options = ["Profile", "Settings", "Account", "LogOut"];

export default function SimpleListMenu({ img }: { img: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="">
      <Avatar
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-label="when device is locked"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickListItem}
        alt="Avatar"
        src={img}
        className="rounded-full h-20 w-20"
      >
        <ListItemText primary="" secondary={options[selectedIndex]} />
      </Avatar>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {index === options.length - 1 ? (
              <Link
                href="/api/auth/logout"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {option}
              </Link>
            ) : (
              option
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
