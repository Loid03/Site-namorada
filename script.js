
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Muda a imagem a cada 5 segundos
}

function mudarSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

// Inicializar primeira música ao carregar
window.addEventListener('load', () => {
  const music = document.getElementById("music");
  music.src = musicList[0].url;
});

const musicList = [
  {
    title: "Let the world burn",
    artist: "Chris Grey",
    url: "attached_assets/WhatsApp Audio 2025-05-22 at 17.36.22.mpeg"
  },
  {
    title: "Wanna be yours",
    artist: "Arctic Monkeys",
    url: "attached_assets/WhatsApp Audio 2025-05-22 at 17.36.28.mpeg"
  }
];

function changeMusic() {
  const selector = document.getElementById("musicSelector");
  const music = document.getElementById("music");
  const titleElement = document.getElementById("musicTitle");
  const artistElement = document.getElementById("musicArtist");
  const selectedMusic = musicList[selector.value];
  
  titleElement.textContent = selectedMusic.title;
  artistElement.textContent = selectedMusic.artist;
  music.src = selectedMusic.url;
  
  if (!music.paused) {
    music.play();
  }
}

function toggleMusic() {
  const music = document.getElementById("music");
  const playBtn = document.querySelector('.play-btn');
  if (music.paused) {
    music.play();
    playBtn.textContent = '⏸️';
  } else {
    music.pause();
    playBtn.textContent = '▶️';
  }
}

// Contador de tempo começando em 17 de janeiro de 2025 00:00
const dataInicio = new Date('2025-01-17T00:00:00');

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;
  
  const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)); // Usando média de dias por mês
  const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById('tempo').innerHTML = 
    `<div>${meses} meses</div><div>${dias} dias</div><div>${horas} horas</div><div>${minutos} min</div><div>${segundos} seg</div>`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const poemas = [
  "Em cada amanhecer penso em você,\nComo a lua que brilha no céu,\nMeu amor por você é eterno,\nComo as estrelas que nunca se apagam ✨",
  "Seu sorriso ilumina meus dias,\nSeu amor aquece meu coração,\nCada momento ao seu lado,\nÉ uma nova razão para amar ❤️",
  "Entre milhões de pessoas no mundo,\nMeu coração escolheu você,\nPara ser meu porto seguro,\nE minha razão de viver 💑",
  "Nas manhãs mais cinzentas,\nVocê é meu raio de sol,\nNas noites mais escuras,\nVocê é minha luz, meu farol 🌟",
  "Te amo mais que ontem,\nMenos que amanhã,\nPois meu amor por você,\nCresce a cada manhã 💕"
];

const frases = [
  "Você é meu lugar favorito no mundo 🌍",
  "Nunca vou cansar de te amar 💘",
  "Com você, tudo faz sentido ✨",
  "Você é o amor da minha vida 💑",
  "Cada dia te amo mais 💝",
  "Meu coração é seu para sempre 💖"
];

function showRandomPoem() {
  const poem = poemas[Math.floor(Math.random() * poemas.length)];
  const modal = document.getElementById('letterModal');
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = `
    <span class="close-btn" onclick="closeLetter()">&times;</span>
    <h2>Poema para Você 📝</h2>
    <p style="white-space: pre-line; font-size: 1.2rem; text-align: center">
      ${poem}
    </p>
  `;
  modal.style.display = 'block';
}

function showRandomPhrase() {
  const phrase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById('randomPhrase').textContent = phrase;
}

function openLetter() {
  document.getElementById('letterModal').style.display = 'block';
}

function closeLetter() {
  document.getElementById('letterModal').style.display = 'none';
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

function showLove() {
  alert('Eu também te amo pra sempre! 💖💖💖');
  for(let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 150);
  }
}

window.onclick = function(event) {
  if (event.target == document.getElementById('letterModal')) {
    closeLetter();
  }
}

// Função para abrir imagem no modal
const images = document.querySelectorAll('.slides img');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

images.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    imageModal.style.display = 'block';
  });
});

imageModal.addEventListener('click', () => {
  imageModal.style.display = 'none';
});

showRandomPhrase();
