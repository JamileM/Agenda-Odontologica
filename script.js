document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botao');
  const form = document.getElementById('form-contato');

  if (botao) {
    botao.addEventListener('click', () => {
      alert('Função de adicionar consulta ainda não implementada! 🦷');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dados = Object.fromEntries(new FormData(form));
      console.log('Dados do formulário:', dados);
      alert('Formulário enviado! Veja o console (F12).');
      form.reset();
    });
  }
});
