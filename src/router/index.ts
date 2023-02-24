import { RouteRecordRaw } from "vue-router";
import DataMaintenance from "../views/dataMaintenance/index.vue";
import DimensionAuth from "../views/dimensionAuth/index.vue";
import OrgAuth from "../views/orgAuth/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    redirect: "/dataMaintenance",
    component: () =>
      import(/* webpackChunkName: "authView" */ "../views/layout/index.vue"),
    children: [
      {
        path: "/dataMaintenance",
        component: DataMaintenance,
      },
      {
        path: "/dimensionAuth",
        component: DimensionAuth,
      },
      {
        path: "/orgAuth",
        component: OrgAuth,
      },
    ],
  },
];

export { routes };
