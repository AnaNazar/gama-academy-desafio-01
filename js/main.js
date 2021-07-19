// CADASTRO DE EMAIL NA NEWSLETTER
const form_newsletter = document.getElementById('form-newsletter');

form_newsletter.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('form-newsletter-nome').value;
  const email = document.getElementById('form-newsletter-email').value;
  const data = {
    nome,
    email
  };

  const form_newsletter_lead = JSON.stringify(data);

  localStorage.setItem('the_dev_shop_lead', form_newsletter_lead);

  const newsletter_container = document.getElementById('cadastro-newsletter-container');

  newsletter_container.innerHTML = `
  <h2 class="text-blue">Bem-vindo(a) a bordo!</h2>
  <p>Enviamos um email de confirmação, então aproveita e marca como remetente conhecido para não perder nossas promoções.</p>`;
});
