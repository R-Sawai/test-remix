import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

// flatRoutesでルートを自動生成する
export default [...(await flatRoutes())] satisfies RouteConfig;
