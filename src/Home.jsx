import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserList from "./pages/UserList/UserList";

const Home = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/userlist" element={<UserList />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default Home;
