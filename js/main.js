function validarFormularioPesquisa() {
    const form = document.getElementById("form-pesquisa");
    
    form.addEventListener("submit", function(event) {
      const inputPesquisa = document.getElementById("input-pesquisa").value.trim();
      
      if (!inputPesquisa) {
        event.preventDefault(); // Impede envio se estiver vazio
        alert("Digite um termo para pesquisar!");
      }
    });
}
function adicionarRedirecionamentoImg() {
    // Seleciona todas as imagens com a classe "linkImg"
    let imagens = document.querySelectorAll(".linkImg");

    // Adiciona um evento de clique para cada uma delas
    imagens.forEach(function(imagem) {
      imagem.onclick = function() {
        window.location.href = "receita.html";  // Redireciona para a página
      };
    });
}
function adicionarRedirecionamentoPerfil() {
    let perfis = document.getElementsByClassName("perfilIcone");
    for (let perfil of perfis) {
        perfil.onclick = function() {
            window.location.href = "perfil.html";
        };
    }
}
function adicionarRedirecionamentoHomepage() {
    let logos = document.getElementsByClassName("homepage");
    for (let logo of logos) {
        logo.onclick = function() {
            window.location.href = "main.html";
        };
    }
}
  // Chamada de funcoes de redirecionamento
  adicionarRedirecionamentoImg();
  validarFormularioPesquisa();
  adicionarRedirecionamentoPerfil();
  adicionarRedirecionamentoHomepage();