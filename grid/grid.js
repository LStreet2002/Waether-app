var element = ["header", "aside", "main", "footer"];

window.addEventListener("load", function load() {
  element.forEach(function createPage() { });
  card();
  sideNav();
  navv.forEach(function sideNav(navv) { });
});
element.forEach(function createPage(tag) {
  var div = document.createElement("div");

  div.className = tag;
  div.id = tag;
  div.classList.add("center");
  document.getElementById("container").appendChild(div);
});

var library =
  "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/shows/images/icarly/characters/character_thumb_310X175_gibby.jpg?quality=1&height=360&width=640&matte=true&crop=false";
function card() {
  var card = document.createElement("div");
  card.classList.add("card");

  var title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "Guibbe";

  var img = document.createElement("img");
  img.src = `${library}`;
  img.classList.add("gibby");
  card.appendChild(img);
  card.appendChild(title);
  document.querySelector(".main").appendChild(card);
}
var navv = ["Living", "Breathing", "Stop", "Een", "extra", "informations"];

navv.forEach(function sideNav(nav) {
  var head = document.createElement("div");
  var nav1 = document.createElement("a");
  var brea = document.createElement("br");
  nav1.text = "" + nav + " ";

  nav1.href = "grid.html";
  nav1.classList.add(nav, "astext");

  head.appendChild(nav1);
  head.appendChild(brea);
  document.querySelector(".aside").appendChild(head);
});
