# Projeto ONG Lemes (Site Institucional)

Este é o projeto final da disciplina de Desenvolvimento Front-End Para Web da Cruzeiro do Sul. O objetivo foi construir um site institucional completo e profissional para uma ONG fictícia, implementando práticas avançadas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização moderna com CSS Grid, Flexbox e Variáveis CSS.
* **JavaScript (ES6+):** Utilizado para funcionalidades interativas, como:
    * Menu mobile (em `mobile-menu.js`).
    * Validação de formulário (em `form-validator.js`).
    * Alternador de tema (Modo Escuro) (em `theme-toggle.js`).

## ✨ Funcionalidades Principais

* **Responsividade:** O site é totalmente adaptável a dispositivos móveis e desktops.
* **Páginas:**
    * `index.html`: Página inicial com a missão e valores da ONG.
    * `projetos.html`: Página com cards detalhando as iniciativas da ONG.
    * `cadastro.html`: Formulário para inscrição de voluntários.
* **Validação de Formulário:** Verificação de consistência de dados em tempo real no formulário de cadastro.

## ♿ Acessibilidade (WCAG 2.1 - Nível AA)

O projeto foi desenvolvido com foco em acessibilidade:

* **Navegação por Teclado:** Todos os elementos interativos são acessíveis via tecla TAB.
* **Semântica e ARIA:** Uso correto de tags HTML5 e atributos ARIA para leitores de tela, especialmente no formulário de validação.
* **Contraste:** As cores foram escolhidas para garantir um contraste mínimo de 4.5:1.
* **Modo Escuro:** Implementado um alternador de tema para alto contraste e preferência do usuário.

## ⚡ Otimização de Produção

* **Compressão de Imagens:** Uso da tag `<picture>` para servir imagens modernas (`.webp`) com fallback (`.jpg`) para navegadores antigos.
* **Minificação:** (Opcional, se você for fazer) Os arquivos CSS e JS estão minificados na versão de produção.

## ⚙️ Como Executar

O projeto é composto por arquivos estáticos (HTML, CSS, JS) e não necessita de um back-end.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/matheuslemess/projeto-ong]
    ```
2.  Abra a pasta do projeto.
3.  Abra o arquivo `index.html` em qualquer navegador web.

---
*Projeto desenvolvido por Matheus Lemes - [RGM/45100942]*