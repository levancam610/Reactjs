import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import Jogger from "views/ClothesPage/Jogger.jsx";
import Detail from "views/ClothesPage/Detail.jsx";
import Order from "views/ClothesPage/Order.jsx";
var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/a", name: "Components", component: Components },
  { path: "/Home", name: "HomePage", component: HomePage },
  { path: "/Jogger", name: "JoggerPage", component: Jogger },
  { path: "/DetailClothes", name: "DetailClothes", component: Detail },
  { path: "/OrderClothes", name: "OrderClothes", component: Order }
];

export default indexRoutes;
