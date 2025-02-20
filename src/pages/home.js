import gordon from "../assets/images/gordon.jpg";

function home() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const maintxt = document.createElement("h2");
  maintxt.textContent = "You fucking donkey";
  content.appendChild(maintxt);

  const img = document.createElement("img");
  img.src = gordon;
  content.appendChild(img);

  const secondarytxt = document.createElement("h2");
  secondarytxt.textContent = "Active since 1999";
  content.appendChild(secondarytxt);
}

export { home };
