toggleMenu = (event) => {
  const menu = document.querySelector(".lista-menu");
  const alvo = event.target;

  desativar = (elemento) => {
    elemento.classList.remove("botao-ativo");
    elemento.classList.remove("fa-times");
    elemento.classList.add("fa-bars");
    menu.classList.remove("menu-ativo");
  };

  ativar = (elemento) => {
    elemento.classList.add("botao-ativo");
    elemento.classList.add("fa-times");
    elemento.classList.remove("fa-bars");
    menu.classList.add("menu-ativo");
  };

  alvo.classList.contains("botao-ativo") ? desativar(alvo) : ativar(alvo);
};

enviarEmail = () => {
  const inputs = document.querySelectorAll("input");
  const textarea = document.querySelector("textarea");
  inputs.map((input) => {
    input.value
      ? alert("Todos os campos precisam ser preenchidos")
      : textarea.value
      ? alert("A mensagem precisa ser preenchica")
      : alert("email enviado com sucesso, obrigado");
  });
};
