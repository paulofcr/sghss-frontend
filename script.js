function trocarTela(nome){
  document.getElementById("titulo").innerText = nome;

  document.getElementById("cards").innerHTML = `
    <div>${nome}<br><strong>ativo</strong></div>
    <div>Status<br><strong>Online</strong></div>
    <div>Atualizado<br><strong>Agora</strong></div>
  `;
}

function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("active");
}
