function desligar() {
  alert("🔒 Sistema Desligado");
  document.body.innerHTML = "<h1>Sistema Desligado com Sucesso.</h1>";
}
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.altKey && e.code === "KeyP") {
    const painel = document.getElementById("painel");
    painel.style.display = painel.style.display === "none" ? "block" : "none";
  }
});