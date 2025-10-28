/**
 * Gerencia o modo escuro (Dark Mode)
 */
export function initThemeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) {
    return; // Não faz nada se o botão não existir
  }

  // Função para aplicar o tema (seja 'dark' or 'light')
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = '☀️'; // Ícone de sol
      toggleButton.setAttribute('aria-label', 'Alternar modo claro');
    } else {
      document.body.classList.remove('dark-mode');
      toggleButton.textContent = '🌙'; // Ícone de lua
      toggleButton.setAttribute('aria-label', 'Alternar modo escuro');
    }
  }

  // Ouve o clique no botão
  toggleButton.addEventListener('click', () => {
    // Verifica se o modo escuro está ativo
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
      localStorage.setItem('theme', 'light'); // Salva a preferência
      applyTheme('light');
    } else {
      localStorage.setItem('theme', 'dark'); // Salva a preferência
      applyTheme('dark');
    }
  });

  // Carrega a preferência do usuário ao iniciar a página
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
}