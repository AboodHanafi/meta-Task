import React from "react";
import { IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "../../Screens/UsersTable/ConfirmationMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Actions = ({ id, rows, setUsers }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const deleteUser = () => {
    axios
      .delete(`https://test.helpmytoken.com/api/users/${id}`)
      .then((res) => {
        const filteredRows = rows.filter((item) => item.id !== id);
        setUsers(filteredRows);
        setOpen(false);
      })
      .catch(() => alert("Error"));
  };
  return (
    <>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={() => navigate(`/user/${id}`)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => setOpen(true)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
      <AlertDialog
        setOpen={setOpen}
        open={open}
        id={id}
        deleteUser={deleteUser}
      />
    </>
  );
};

export default Actions;
