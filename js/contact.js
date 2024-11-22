document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Configurar EmailJS
    emailjs.init("TU_USER_ID"); // Sustituye por tu USER ID de EmailJS

    const serviceID = "service_0nvac8i"; // Sustituye por tu SERVICE ID
    const templateID = "service_0nvac8i"; // Sustituye por tu TEMPLATE ID

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const params = {
        user_name: name,
        user_email: email,
        user_message: message
    };

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            alert("Mensaje enviado exitosamente.");
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        });
});
