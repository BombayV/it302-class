/*
Mauricio Rivera
msr26@njit.edu
IT302 - 001
October 21st, 2026
Unit 08 - React.js Setup and NavBar Exercise
*/

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("bookshelf", "routes/bookshelf.tsx"),
] satisfies RouteConfig;
