import Home from "./Pages/Home.page";
import AddUser from "./Pages/user/addUser";
export const routers = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/add-user",
    element: <AddUser />,
  },
];
