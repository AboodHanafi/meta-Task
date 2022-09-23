import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../Components/Table";
import { CustomizedTextField, Typography } from "../../globalStyles";
import {
  MainWrapper,
  SearchSection,
  TableSection,
  TextFieldsWrapper,
} from "./style";

function createData(userName, firstName, lastName, email, id) {
  return { userName, firstName, lastName, email, id };
}

const columns = [
  {
    name: "Username",
    id: "1",
  },
  {
    name: "First Name",
    id: "2",
  },
  {
    name: "Last Name",
    id: "3",
  },
  {
    name: "Email",
    id: "4",
  },
  {
    name: "Action",
    id: "5",
  },
];

const UsersTable = () => {
  const [users, setUsers] = React.useState([]);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get("https://test.helpmytoken.com/api/users");
    const rows = response.data.payload.map((item) =>
      createData(
        item.username,
        item.first_name,
        item.last_name,
        item.email,
        item.id
      )
    );
    setUsers(rows);
  };

  const filterAbleData = users;
  const dataFiltered = applySortFilter({
    filterAbleData,
    firstName,
    lastName,
    email,
  });
  return (
    <MainWrapper>
      <SearchSection>
        <Typography fontSize={24} fontWeight={500}>
          Search
        </Typography>
        <TextFieldsWrapper>
          <CustomizedTextField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            id="1"
            variant="outlined"
          />

          <CustomizedTextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            id="2"
            variant="outlined"
          />

          <CustomizedTextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            id="3"
            variant="outlined"
          />
          <Button onClick={() => navigate("/addUser")}> add new user</Button>
        </TextFieldsWrapper>
      </SearchSection>
      <TableSection>
        <BasicTable columns={columns} rows={dataFiltered} setUsers={setUsers} />
      </TableSection>
    </MainWrapper>
  );
};

export default UsersTable;

function applySortFilter({ filterAbleData, firstName, lastName, email }) {
  if (firstName) {
    const searchRegex = new RegExp(escapeRegExp(firstName), "i");
    const searchExclusions = ["userName", "lastName", "email"];

    filterAbleData = filterAbleData.filter((item) => {
      return Object.keys(item).some((obj) => {
        if (!searchExclusions.includes(obj)) {
          return searchRegex.test(item[obj]);
        }
      });
    });
  }

  if (lastName) {
    const searchRegex = new RegExp(escapeRegExp(lastName), "i");
    const searchExclusions = ["userName", "firstName", "email"];

    filterAbleData = filterAbleData.filter((item) => {
      return Object.keys(item).some((obj) => {
        if (!searchExclusions.includes(obj)) {
          return searchRegex.test(item[obj]);
        }
      });
    });
  }

  if (email) {
    const searchRegex = new RegExp(escapeRegExp(email), "i");
    const searchExclusions = ["userName", "lastName", "firstName"];

    filterAbleData = filterAbleData.filter((item) => {
      return Object.keys(item).some((obj) => {
        if (!searchExclusions.includes(obj)) {
          return searchRegex.test(item[obj]);
        }
      });
    });
  }

  return filterAbleData;
}

export const escapeRegExp = (value) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
