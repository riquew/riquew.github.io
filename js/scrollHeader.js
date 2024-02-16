import initWhatsApp from "./whatsappButton.js";

export default function initScrollHeader() {
  const page = window;
  const header = document.querySelector("header");
  const headerLimite = header.offsetHeight + 100;
  const headerScroll = document.querySelector(".header-fino-bg");
  function handleScroll() {
    let scrollado = page.scrollY;
    if (scrollado > headerLimite) {
      headerScroll.classList.add("ativo");
      initWhatsApp("ativo");
    } else {
      headerScroll.classList.remove("ativo");
      initWhatsApp("inativo");
    }
  }
  page.addEventListener("scroll", handleScroll);
}
