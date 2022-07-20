import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { user, getToLogin } = useContext(AuthContext);

  useEffect(() => {
    if (!user || !user.isLoggedIn) {
      console.log("user", user);
      getToLogin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <Outlet />;
};

export default PrivateRoutes;
