import { Route, Routes } from "react-router-dom";
import SignupForm from "./Components/Form";
import Layout from "./Components/Layout/Layout";
import UsersTable from "./Screens/UsersTable";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<UsersTable />} />
          <Route path="/adduser" element={<SignupForm />} />
          <Route path="/user/:id" element={<SignupForm />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
