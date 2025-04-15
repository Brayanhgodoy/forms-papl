document.getElementById("fichaPiloto").addEventListener("submit", function (e) {
    e.preventDefault();
    const campos = this.elements;
    for (let campo of campos) {
      if (campo.hasAttribute("required") && !campo.value.trim()) {
        alert(`O campo "${campo.name}" é obrigatório.`);
        campo.focus();
        return;
      }
    }
  
    alert("Formulário enviado com sucesso! 🚀");
    this.reset();
  });
  