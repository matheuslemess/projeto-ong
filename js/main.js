import { initMobileMenu } from './mobile-menu.js';
import { initFormValidation } from './form-validator.js';

/**
 * Executa o JavaScript quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();

  initFormValidation();

});