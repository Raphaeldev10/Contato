


const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');


function validateName(name) {
  if (name.trim() === '') {
    nameError.textContent = 'O nome é obrigatório.';
    nameError.style.display = 'block';
    return false;
  } else {
    nameError.style.display = 'none';
    return true;
  }
}


function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (email.trim() === '') {
    emailError.textContent = 'O e-mail é obrigatório.';
    emailError.style.display = 'block';
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Por favor, insira um e-mail válido.';
    emailError.style.display = 'block';
    return false;
  } else {
    emailError.style.display = 'none';
    return true;
  }
}


function validateMessage(message) {
  if (message.trim() === '') {
    messageError.textContent = 'A mensagem é obrigatória.';
    messageError.style.display = 'block';
    return false;
  } else {
    messageError.style.display = 'none';
    return true;
  }
}


contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const isNameValid = validateName(nameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isMessageValid = validateMessage(messageInput.value);

 
  if (isNameValid && isEmailValid && isMessageValid) {
    alert('Formulário enviado com sucesso!');
    contactForm.reset(); 
  }
});
