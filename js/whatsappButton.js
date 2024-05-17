export default function initWhatsApp(estado) {
  const whatsapp = document.querySelector(".whatsapp-bg");
  const faleConosco = document.querySelector(".whatsapp-conteudo p");
  if (estado === "ativo") whatsapp.classList.add("ativo");
  else whatsapp.classList.remove("ativo");

  function showText() {
    faleConosco.classList.add("ativo");
  }

  function removeText() {
    faleConosco.classList.remove("ativo");
  }

  whatsapp.addEventListener("mouseover", showText);
  whatsapp.addEventListener("mouseleave", removeText);
}
