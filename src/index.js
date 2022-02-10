import cipher from "./cipher.js";

document.getElementById("btnEncode").addEventListener("click", encode);
document.getElementById("btnDecode").addEventListener("click", decode);
document.getElementById("btnClear").addEventListener("click", clear);

function encode() {
  let texto = document.getElementById("message").value.toUpperCase(); //ler o texto da cx1 e transforma minusculo em maiscula
  let offset = Number(document.getElementById("offset").value); //identifica o deslocamento selecionado
  document.getElementById("result").value = cipher.encode(offset, texto); //passa a msg da cx1 para a cx2
}

function decode() {
  let texto = document.getElementById("message").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);

  document.getElementById("txtResult").value = cipher.decode(offset, texto);
}

function clear() {
  document.getElementById("message").value = "";
  document.getElementById("result").value = "";
  document.getElementById("offset").value = "1";
}
