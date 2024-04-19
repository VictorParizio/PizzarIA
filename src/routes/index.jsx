import { RouterProvider } from "react-router-dom";

import { route } from "./route";

export const AppRouter = () => {
  return <RouterProvider router={route} />;
};
