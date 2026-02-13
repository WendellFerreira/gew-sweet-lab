const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

if (form && statusMsg) {
  const submitBtn = form.querySelector('input[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Feedback inicial
    statusMsg.textContent = "Enviando mensagem...";
    statusMsg.style.color = "#aaa";

    // Evita envio duplicado
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgegwgn", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        statusMsg.textContent = "Mensagem enviada com sucesso! Entrarei em contato em breve.";
        statusMsg.style.color = "#1aff00";
        form.reset();
      } else {
        statusMsg.textContent = "Erro ao enviar. Tente novamente.";
        statusMsg.style.color = "#ff5555";
      }

    } catch (error) {
      statusMsg.textContent = "Erro de conexão. Verifique sua internet.";
      statusMsg.style.color = "#ff5555";
    } finally {
      // Reabilita o botão após resposta
      submitBtn.disabled = false;
    }
  });
}
