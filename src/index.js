import { header } from "./pages/header.js";
import { home } from "./pages/home.js";
import { menu } from "./pages/menu.js";
import "./assets/styles/index.css";

const nav = header();
home();

const home_btn = nav.home;
const menu_btn = nav.menu;
const about_btn = nav.about;

home_btn.addEventListener("click", () => {
  home();
});

menu_btn.addEventListener("click", () => {
  menu();
});
