const breathBtn = document.getElementById('breathBtn');
const breathCircle = document.getElementById('breathCircle');

let isBreathing = false;
let breathInterval;

breathBtn.addEventListener('click', () => {
  if (!isBreathing) {
    // Iniciar exercício
    isBreathing = true;
    breathBtn.textContent = "Parar Exercício";
    startBreathing();
    breathInterval = setInterval(startBreathing, 8000); // Repete a cada 8 segundos (4s inspira, 4s expira)
  } else {
    // Parar exercício
    isBreathing = false;
    breathBtn.textContent = "Iniciar Respiração Guiada";
    clearInterval(breathInterval);
    breathCircle.classList.remove('grow');
  }
});

function startBreathing() {
  // Expande o círculo (Inspire)
  breathCircle.classList.add('grow');
  
  // Após 4 segundos, diminui o círculo (Expire)
  setTimeout(() => {
    if (isBreathing) {
      breathCircle.classList.remove('grow');
    }
  }, 4000);
}