// Simple typewriter effect for the command
const typewriterEl = document.getElementById("typewriter");
const cursorEl = document.querySelector(".cursor");

if (typewriterEl) {
  const fullText = typewriterEl.textContent.trim();
  typewriterEl.textContent = "";
  let i = 0;

  function type() {
    if (i <= fullText.length) {
      typewriterEl.textContent = fullText.slice(0, i);
      i++;
      setTimeout(type, 80);
    }
  }

  type();
}

// Set year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
