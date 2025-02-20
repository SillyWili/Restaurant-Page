import gordon from "../assets/images/gordon.jpg";

function home() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const items = document.createElement("div");
  items.setAttribute("id", "home");

  const main_txt = document.createElement("h2");
  main_txt.textContent = "You fucking donkey";
  items.appendChild(main_txt);

  const img = document.createElement("img");
  img.src = gordon;
  items.appendChild(img);

  const secondary_txt = document.createElement("h2");
  secondary_txt.textContent = "Active since 1999";
  items.appendChild(secondary_txt);

  content.appendChild(items);
}

export { home };
