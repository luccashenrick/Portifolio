function mostrarHora() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
    document.getElementById("hora").innerHTML = horas + ":" + minutos + ":" + segundos;
  }
  setInterval(mostrarHora, 1000); // Atualiza a cada segundo