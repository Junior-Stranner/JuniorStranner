/*// notifyVisit.js

// Faz uma requisição POST para o backend para registrar a visita e disparar o e-mail
// Adicione isso no seu HTML/JS do portfólio (ex: no footer ou no carregamento da página)
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://sua-api-render.com/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Portfolio-Access": "true", // Header customizado
    },
    body: JSON.stringify({
      page: window.location.pathname,
      referrer: document.referrer || "direct",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Notificação enviada:", data))
    .catch((err) => console.error("Erro na notificação:", err));
});

// Exemplo: Frontend pode escolher qual versão chamar
fetch("https://sua-api-render.com/api/email/notify", {
  method: "POST",
});
// ou
fetch("https://sua-api-render.com/api/email/async-notify", {
  method: "POST",
});
*/

/*Please Read this if you are take a look at this repo
this page is currently in update/work in this page you will see in future the business rule of the front-end
form my Notification API that I´ll  working right now, see you soon!
*/
