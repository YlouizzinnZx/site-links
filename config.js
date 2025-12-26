
  function atualizarRelogio() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();

    document.getElementById("relogio").textContent =
      `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`;
  }

  atualizarRelogio();              // chama uma vez
  setInterval(atualizarRelogio, 1000); // atualiza a cada 1s

