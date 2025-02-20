import "../assets/styles/header.css";

function header() {
  const header = document.querySelector("header");
  const title = document.createElement("h1");
  title.textContent = "My beautiful restaurant";

  const nav = document.querySelector("nav");
  const home = document.createElement("button");
  home.textContent = "Home";
  const menu = document.createElement("button");
  menu.textContent = "Menu";
  const about = document.createElement("button");
  about.textContent = "About";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);
  header.insertBefore(title, nav);

  return { home, about, menu };
}

export { header };
