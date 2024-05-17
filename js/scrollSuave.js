export default function initScrollSuave() {
  const menu = document.querySelector("nav a[href^='#']");
  if (menu) {
    function scrollSuave(event) {
      event.preventDefault();
      const contatoArticle = document.querySelector("#contato");
      contatoArticle.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    menu.addEventListener("click", scrollSuave);
  }
}
