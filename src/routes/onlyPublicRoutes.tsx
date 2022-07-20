import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const OnlyPublicRoutes = () => {
  const { user, getToHome } = useContext(AuthContext);
  useEffect(() => {
    if (user && user.isLoggedIn) {
      console.log("user", user);
      getToHome();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return <Outlet />;
};

export default OnlyPublicRoutes;
