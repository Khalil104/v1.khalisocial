// Animation au défilement
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observer après animation
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
});

// Vérification du formulaire
document.getElementById("contact-form").addEventListener("submit", function (event) {
  const nom = document.getElementById("name").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  if (nom === "" || prenom === "" || message === "") {
    alert("Tous les champs sont obligatoires !");
    event.preventDefault();
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Veuillez entrer une adresse e-mail valide !");
    event.preventDefault();
    return;
  }

  if (message.length < 10) {
    alert("Le message doit contenir au moins 10 caractères !");
    event.preventDefault();
    return;
  }
});

// by Abdoul Rachid BISSARE / +229 01 63 61 49 80
