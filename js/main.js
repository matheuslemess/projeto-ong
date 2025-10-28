import { initMobileMenu } from './mobile-menu.js';
import { initFormValidation } from './form-validator.js';
import { initThemeToggle } from './theme-toggle.js'; // 1. IMPORTAR AQUI

/**
 * Executa o JavaScript quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFormValidation();
  initThemeToggle(); // 2. CHAMAR AQUI
});