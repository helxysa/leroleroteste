document.getElementById("simButton").addEventListener("click", function () {
  var imagem = document.getElementById("imagem");
  imagem.classList.remove("hidden");
  imagem.classList.add("fadeIn");
  document.getElementById("simButton").classList.add("hidden");
  document.getElementById("naoButton").classList.add("hidden");
  document.getElementById("text").classList.add("hidden");
  var audio = document.getElementById("myAudio");
  audio.play();
});

document.getElementById("naoButton").addEventListener("click", function () {
  var imagem = document.getElementById("imagem2");
  imagem.classList.remove("hidden");
  imagem.classList.add("fadeIn");
  document.getElementById("simButton").classList.add("hidden");
  document.getElementById("naoButton").classList.add("hidden");
  document.getElementById("text").classList.add("hidden");
  var audio = document.getElementById("myAudio2");
  audio.play();
});
