import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { OrderDetails } from "./pages/OrderDetails/OrderDetails";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          // home page
          { index: true, element: <Navigate to="/home" /> },
          { path: "/home", element: <Home /> },
          { path: "/orderdetails/:orderId", element: <OrderDetails /> },

          { path: "*", element: <Home /> },
        ],
      },
    ],
  },
]);

// error handeling
function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="container">
        <h1>Error - Something went wrong</h1>
        {import.meta.env.MODE !== "production" && (
          <>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
          </>
        )}
      </div>
    </>
  );
}
