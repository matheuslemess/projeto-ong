/**
 * REQUISITO OBRIGATÓRIO (ENTREGA 3)
 * Sistema de verificação de consistência de dados em formulários,
 * com aviso ao usuário de preenchimento incorreto.
 */

export function initFormValidation() {
  const form = document.querySelector('.styled-form');
  
  if (!form) {
    return;
  }

  form.setAttribute('novalidate', true);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const isFormValid = validateAllFields(form);

    if (isFormValid) {
      alert('Formulário enviado com sucesso! (simulação)');
      form.reset();
    } else {
      alert('Por favor, corrija os erros no formulário.');
    }
  });

  form.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
  });
}

/**
 * Valida todos os campos do formulário
 */
function validateAllFields(form) {
  let isValid = true;
  form.querySelectorAll('input[required]').forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  return isValid;
}

/**
 * Valida um único campo
 */
function validateField(input) {
  const type = input.type;
  const value = input.value.trim();
  let errorMessage = '';

  if (value === '') {
    errorMessage = 'Este campo é obrigatório.';
  } 
  else if (type === 'email' && !isValidEmail(value)) {
    errorMessage = 'Por favor, insira um e-mail válido.';
  } 
  else if (input.id === 'cpf' && !isValidCPF(value)) {
    errorMessage = 'Por favor, insira um CPF válido (apenas números).';
  }
  else if (input.id === 'cep' && !isValidCEP(value)) {
    errorMessage = 'Por favor, insira um CEP válido (apenas números).';
  }

  if (errorMessage) {
    showError(input, errorMessage);
    return false;
  } else {
    clearError(input);
    return true;
  }
}

/**
 * Funções de Template (Manipulação do DOM)
 * Exibe a mensagem de erro no template HTML
 */
function showError(input, message) {
  const formGroup = input.parentElement;

  const errorSpan = formGroup.querySelector(`#${input.id}-error`);
  
  if (errorSpan) {
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true'); 
    input.setAttribute('aria-describedby', errorSpan.id); 

    errorSpan.textContent = message;
    errorSpan.classList.add('is-visible');
  }
}

/**
 * Limpa a mensagem de erro
 */
function clearError(input) {
  const formGroup = input.parentElement;
  
  const errorSpan = formGroup.querySelector(`#${input.id}-error`); 

  if (errorSpan) {
    input.classList.remove('is-invalid');
    input.setAttribute('aria-invalid', 'false');
    input.removeAttribute('aria-describedby');

    errorSpan.textContent = '';
    errorSpan.classList.remove('is-visible');
  }
}

/**
 * Funções de Verificação de Consistência
 */
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function isValidCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, ''); 
  if (cpf.length !== 11) return false;
  return true; 
}

function isValidCEP(cep) {
  cep = cep.replace(/[^\d]/g, '');
  if (cep.length !== 8) return false;
  return true;
}