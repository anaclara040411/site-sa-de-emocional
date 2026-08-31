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
  <script>
// ====== PANDA MASCOT LOGIC ======
let currentStyle = 'school'; // default

// Carregar nome salvo do localStorage (se houver)
function loadSavedName() {
  const name = localStorage.getItem('pandaName');
  if (name) {
    document.getElementById('panda-input').value = name;
    document.getElementById('panda-name').textContent = name;
  }
}

// Salvar nome do panda
document.addEventListener('DOMContentLoaded', function() {
  loadSavedName();
  
  const form = document.getElementById('panda-form');
  const input = document.getElementById('panda-input');
  const nameDisplay = document.getElementById('panda-name');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) {
        alert('Por favor, digite um nome para o seu panda!');
        input.focus();
        return;
      }
      localStorage.setItem('pandaName', val);
      nameDisplay.textContent = val;
      // Opcional: mensagem de confirmação
      // alert(`Nome "${val}" salvo!`);
    });
  }
  <style>
.panda-body, .panda-head {
  transition: fill 0.4s;
}
.panda-accessory {
  transition: all 0.4s;
}
.sound-btn {
  transition: background 0.2s, transform 0.15s;
}
.sound-btn:active {
  transform: scale(0.96);
}
</style>

  
});

// ====== SONS PARA ACALMAR ======
// Áudios de exemplo (usando arquivos gratuitos do freesound.org)
const sounds = {
  chuva: {
    name: 'Chuva Leve',
    url: 'https://cdn.freesound.org/previews/46/46249__julien-matthey__rain-loop-short.wav'
  },
  ondas: {
    name: 'Ondas do Mar',
    url: 'https://cdn.freesound.org/previews/167/167224__berke__ocean-waves-loop.wav'
  },
  vento: {
    name: 'Vento na Floresta',
    url: 'https://cdn.freesound.org/previews/127/127498__blue-ellse__wind-in-the-trees.wav'
  }
};

let currentAudio = null;
let isPlaying = false;

function setupSoundButtons() {
  document.querySelectorAll('.sound-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const type = btn.getAttribute('data-sound');
      
      // Parar áudio anterior se estiver tocando
      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      
      // Criar novo áudio
      currentAudio = new Audio(sounds[type].url);
      currentAudio.loop = true;
      currentAudio.volume = 0.6;
      
      // Play
      currentAudio.play()
        .then(() => {
          isPlaying = true;
          // Atualizar UI: botão ativo
          document.querySelectorAll('.sound-btn').forEach(b => {
            b.style.background = '#3498db';
            b.style.color = 'white';
          });
          btn.style.background = '#27ae60';
          btn.style.color = 'white';
        })
        .catch(err => {
          alert('Não foi possível tocar o som. Tente novamente.');
        });
      
      // Salvar som ativo
      localStorage.setItem('activeSound', type);
    });
  });
  
  // Carregar som salvo na página
  const lastSound = localStorage.getItem('activeSound');
  if (lastSound && sounds[lastSound]) {
    // Auto-play on load (alguns navegadores bloqueiam autoplay)
    setTimeout(() => {
      currentAudio = new Audio(sounds[lastSound].url);
      currentAudio.loop = true;
      currentAudio.volume = 0.6;
      currentAudio.play().catch(() => {}); // autoplay bloqueado é comum
    }, 500);
  }
}

// Inicializar sons quando DOM carregar
document.addEventListener('DOMContentLoaded', setupSoundButtons);

// ====== Respiração Guiada (se quiser melhorar) ======
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.breath-btn') || 
    document.querySelector('button, [onclick*="respir"]');
  if (btn) {
    btn.addEventListener('click', function() {
      // Implementação simples de respiração 4-4-4-4
      alert('Respiração guiada iniciada! Inspire (4s) → Segure (4s) → Expire (4s) → Pausa (4s).');
    });
  }
});
</script>
