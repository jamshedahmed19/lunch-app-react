import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// * COMPONENTS IMPORTS
import Layout from "../layout";
import OnlyPublicRoutes from "./onlyPublicRoutes";
// * UTILS
import { onlyPublicRoutes, privateRoutes, publicRoutes } from "./paths";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";

const RouteProvider = () => {
  const _publicRoutes = Object.values(publicRoutes);
  const _onlyPublicRoutes = Object.values(onlyPublicRoutes);
  const _privateRoutes = Object.values(privateRoutes);

  return (
    <Routes>
      <Route element={<OnlyPublicRoutes />}>
        {_onlyPublicRoutes.map((route: any) => (
          <Route path={route.path} element={route.component} key={uuidv4()} />
        ))}
      </Route>
      <Route element={<Layout />}>
        <Route element={<PrivateRoutes />}>
          {_privateRoutes.map((route: any) => (
            <Route path={route.path} element={route.component} key={uuidv4()} />
          ))}
        </Route>
        <Route element={<PublicRoutes />}>
          {_publicRoutes.map((route: any) => (
            <Route path={route.path} element={route.component} key={uuidv4()} />
          ))}
        </Route>
        {/* //* ADD NOT FOUND PAGE */}
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default RouteProvider;
