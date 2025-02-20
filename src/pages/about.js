function about() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const items = document.createElement("div");
  items.setAttribute("id", "secondary");

  const name = document.createElement("p");
  name.textContent = "Guest3295";
  const phone = document.createElement("p");
  phone.textContent = "545-674-2790";
  const mail = document.createElement("p");
  mail.textContent = "random.user@fakemail.com";

  items.appendChild(name);
  items.appendChild(phone);
  items.appendChild(mail);
  content.appendChild(items);
}

export { about };
