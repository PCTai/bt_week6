import routesConfig from "../routesconfig";
import Form from "../pages/Form";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import SearchFilter from "../pages/Filter";
import NotFound from "../pages/NotFound";

export const publicRoutes = [
  {
    id: 1,
    path: routesConfig.home,
    element: Home,
  },
  {
    id: 2,
    path: routesConfig.search,
    element: SearchFilter,
  },
  {
    id: 3,
    path: routesConfig.form,
    element: Form,
  },
  {
    id: 4,
    path: routesConfig.quiz,
    element: Quiz,
  },
  {
    id: 5,
    path: routesConfig.notFound,
    element: NotFound,
  },
];