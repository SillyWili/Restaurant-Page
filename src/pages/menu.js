import beef from "../assets/images/beefwellington.jpg";
import spud from "../assets/images/spud.jpeg";
import shawarma from "../assets/images/shawarma.jpg";
import "../assets/styles/menu.css";

function menu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const item1 = document.createElement("div");
  const item1_img = document.createElement("img");
  const price1 = document.createElement("p");
  const text1 = document.createElement("p");
  price1.textContent = "150$";
  text1.textContent = "Don't just stand there like a big f—ing muffin!";
  item1_img.src = beef;
  item1.appendChild(item1_img);
  item1.appendChild(price1);
  item1.appendChild(text1);
  content.appendChild(item1);

  const item2 = document.createElement("div");
  const item2_img = document.createElement("img");
  const price2 = document.createElement("p");
  const text2 = document.createElement("p");
  price2.textContent = "10$";
  text2.textContent = "Ight mate, first customer of the day gets extra beans";
  item2_img.src = spud;
  item2.appendChild(item2_img);
  item2.appendChild(price2);
  item2.appendChild(text2);
  content.appendChild(item2);

  const item3 = document.createElement("div");
  const item3_img = document.createElement("img");
  const price3 = document.createElement("p");
  const text3 = document.createElement("p");
  price3.textContent = "5$";
  text3.textContent = "Thank you boss";
  item3_img.src = shawarma;
  item3.appendChild(item3_img);
  item3.appendChild(price3);
  item3.appendChild(text3);
  content.appendChild(item3);
}

export { menu };
