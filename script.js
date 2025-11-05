emailjs.init(window.env.EMAIL_PUBLIC_KEY);

function enviarFormulario(e){
    e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;
  let resposta = document.getElementById("resposta");
  let form = document.getElementById("form");

  emailjs.send(window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_ADMIN, {
nome: nome,
email: email,
mensagem: mensagem,
});

emailjs.send(window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_REPLY, {
  nome: nome,
  email: email
})

resposta.innerHTML = "Sua mensagem foi enviada com sucesso! Aguarde nosso retorno!"
  //alert("Sua mensagem foi enviada com sucesso! Aguarde nosso retorno!");
  form.reset();
}