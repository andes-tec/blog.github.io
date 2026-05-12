// Artículos (sin TDAH, con videos funcionales)
const articlesData = [
  {
    id: 1,
    title: "Coaching ontológico: cómo transformar creencias limitantes",
    category: "coaching",
    excerpt: "El lenguaje crea realidades. Descubrí cómo cambiar tus conversaciones internas para expandir tu potencial.",
    content: `<p>El coaching ontológico nos enseña que no actuamos según la realidad, sino según nuestra interpretación de ella. Frases como "no soy suficiente" o "no sirvo para esto" son juicios aprendidos. A través de la indagación, podemos modificar el observador que llevamos dentro. En este artículo comparto 3 preguntas poderosas para desafiar creencias: ¿Qué evidencia tengo? ¿Quién dijo eso? ¿Qué nueva acción podría tomar si creyera lo contrario?</p><div class="video-responsive"><iframe src="https://www.youtube.com/embed/2Vv-BfVoq4g" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p>Un cambio de postura corporal y de vocabulario puede abrir caminos inesperados.</p>`,
    image: null,
    videoId: "2Vv-BfVoq4g",
    date: "2026-04-05"
  },
  {
    id: 2,
    title: "Dato curioso: el cerebro aprende mejor con emociones positivas",
    category: "curiosidad",
    excerpt: "¿Sabías que las emociones placenteras potencian la neuroplasticidad? Un dato revelador.",
    content: `<p>La neurociencia afectiva demuestra que cuando sentimos curiosidad, alegría o calma, el cerebro libera dopamina y aumenta la formación de nuevas conexiones sinápticas. Por eso es vital que el aprendizaje escolar y el autodidacta incorporen el juego y la gratificación. Si estás estudiando algo nuevo, creá pequeños rituales de recompensa y ambientes acogedores: tu memoria lo agradecerá.</p><img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format" alt="cerebro feliz" style="width:100%; border-radius: 24px;"><p>En mis talleres aplicamos técnicas de anclaje emocional para estudiar con mayor fluidez.</p>`,
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format",
    videoId: null,
    date: "2026-03-28"
  },
  {
    id: 3,
    title: "Discalculia: herramientas para entender los números",
    category: "psicopedagogia",
    excerpt: "La discalculia no es falta de esfuerzo. Estrategias prácticas para el día a día.",
    content: `<p>Muchas personas sufren en silencio con los números y las operaciones básicas. La discalculia es una condición neurocognitiva que afecta el sentido numérico. Usar material concreto (regletas, ábacos) y relacionar los números con colores y ritmos puede hacer maravillas. Además, el acompañamiento emocional es clave para evitar la frustración. En este artículo te muestro 5 apps gratuitas y juegos de mesa adaptados.</p><img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format" alt="matemáticas divertidas"><p>Si identificás estas señales en tu hijo o en vos, no dudes en consultar una evaluación psicopedagógica.</p>`,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format",
    videoId: null,
    date: "2026-04-12"
  },
  {
    id: 4,
    title: "Comunicación consciente en pareja y familia (video)",
    category: "coaching",
    excerpt: "Aprender a validar emociones sin juicios transforma los vínculos.",
    content: `<p>Desde el coaching ontológico trabajamos la escucha activa y la responsabilidad afectiva. Te comparto la técnica del 'mensaje yo': en lugar de decir 'tú nunca me escuchas', decí 'cuando no me miras mientras hablo, me siento invisible'. Pequeños cambios lingüísticos que abren puertas al diálogo. Practicá en tus relaciones cotidianas y notarás la diferencia.</p><div class="video-responsive"><iframe src="https://www.youtube.com/embed/kspDB9J3P0w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p>Este video complementa la explicación con ejemplos prácticos.</p>`,
    image: null,
    videoId: "kspDB9J3P0w",
    date: "2026-04-01"
  },
  {
    id: 5,
    title: "Beneficios de las Barras de Access en la ansiedad",
    category: "curiosidad",
    excerpt: "Un dato científico y energético sobre esta técnica suave.",
    content: `<p>Las Barras de Access son 32 puntos en la cabeza que, al ser estimulados suavemente, ayudan a liberar patrones de estrés archivados. Estudios preliminares indican una reducción de los niveles de cortisol. Muchas personas reportan mayor claridad mental y descanso profundo. Si bien no sustituyen terapia médica, es un complemento maravilloso para la calma.</p><img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format" alt="barras de access"><p>En mis sesiones presenciales integro esta herramienta para quienes lo deseen.</p>`,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format",
    videoId: null,
    date: "2026-03-20"
  },
  {
    id: 6,
    title: "El poder de la rutina en niños con dificultades de aprendizaje",
    category: "psicopedagogia",
    excerpt: "Cómo las estructuras predecibles mejoran la memoria de trabajo.",
    content: `<p>Los horarios visuales, los rituales de estudio y los descansos activos son aliados para niñas y niños con dislexia o TDAH. En este artículo encontrarás ejemplos de planificadores semanales descargables y consejos para armar un ambiente libre de distracciones. La consistencia genera seguridad cognitiva.</p><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format" alt="niño estudiando">`,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format",
    videoId: null,
    date: "2026-04-08"
  }
];

const curiositiesDB = [
  { text: "El cerebro humano tiene aproximadamente 86 mil millones de neuronas. ¡Cada una puede conectarse con hasta 10,000 otras!", source: "Neurociencia Cognitiva" },
  { text: "La dislexia puede traer ventajas en pensamiento tridimensional y resolución creativa de problemas.", source: "Estudios de Yale" },
  { text: "El 75% de las personas que reciben coaching ontológico mejoran sus relaciones interpersonales en los primeros 3 meses.", source: "ICF Global" },
  { text: "Practicar 10 minutos de mindfulness al día aumenta la densidad de materia gris en áreas relacionadas con la memoria.", source: "Harvard Medical" },
  { text: "Las Barras de Access fueron desarrolladas por Gary Douglas en 1990; hoy se usan en más de 170 países.", source: "Access Consciousness" }
];

let currentCuriosityIndex = 0;
let postsPerPage = 6;
let currentPage = 1;
let filteredPosts = [...articlesData];
let currentFilter = "all";

const postsGrid = document.getElementById("postsGrid");
const loadMoreContainer = document.getElementById("loadMoreContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const filterBtns = document.querySelectorAll(".filter-btn");
const darkToggle = document.getElementById("darkModeToggle");
const modal = document.getElementById("postModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModalBtn");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const curiosityTextEl = document.querySelector(".curiosity-text");
const curiosityAuthor = document.querySelector(".curiosity-author");
const prevCuriosity = document.getElementById("prevCuriosityBtn");
const nextCuriosity = document.getElementById("nextCuriosityBtn");
const curiosityIndexSpan = document.getElementById("curiosityIndex");

// Dark mode
function initDarkMode() {
  const savedTheme = localStorage.getItem("blog-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    toggleDarkIcons(true);
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    toggleDarkIcons(false);
  }
}
function toggleDarkIcons(isDark) {
  const moonIcon = darkToggle.querySelector(".fa-moon");
  const sunIcon = darkToggle.querySelector(".fa-sun");
  if (isDark) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
}
darkToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  if (isDark) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("blog-theme", "light");
    toggleDarkIcons(false);
  } else {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    localStorage.setItem("blog-theme", "dark");
    toggleDarkIcons(true);
  }
});

function renderPosts() {
  const end = currentPage * postsPerPage;
  const postsToShow = filteredPosts.slice(0, end);
  if (!postsGrid) return;
  postsGrid.innerHTML = "";
  postsToShow.forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card fade-up";
    let mediaHtml = "";
    if (post.image) {
      mediaHtml = `<img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">`;
    } else if (post.videoId) {
      mediaHtml = `<div class="post-video-placeholder"><i class="fab fa-youtube"></i></div>`;
    } else {
      mediaHtml = `<div class="post-video-placeholder" style="background:var(--primary-light);"><i class="fas fa-brain"></i></div>`;
    }
    card.innerHTML = `
      ${mediaHtml}
      <div class="post-content">
        <span class="post-category">${post.category === "psicopedagogia" ? "🧠 Psicopedagogía" : post.category === "coaching" ? "✨ Coaching" : "📌 Dato curioso"}</span>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${post.excerpt.substring(0, 100)}...</p>
        <button class="read-more-btn" data-id="${post.id}">Leer más <i class="fas fa-arrow-right"></i></button>
      </div>
    `;
    postsGrid.appendChild(card);
  });
  
  if (filteredPosts.length > currentPage * postsPerPage) {
    loadMoreContainer.style.display = "block";
  } else {
    loadMoreContainer.style.display = "none";
  }
  
  const fadeElements = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));
  
  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.getAttribute("data-id"));
      const fullPost = filteredPosts.find(p => p.id === id);
      if (fullPost) openModal(fullPost);
    });
  });
}

function openModal(post) {
  let mediaInside = "";
  if (post.videoId) {
    // Agregamos un pequeño script para detectar si el iframe falla
    mediaInside = `
      <div class="video-responsive" id="videoContainer">
        <iframe src="https://www.youtube.com/embed/${post.videoId}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div id="videoFallbackMsg" style="display:none; background:#ffeeee; padding:0.8rem; border-radius:20px; margin-top:0.5rem; text-align:center; font-size:0.85rem;">
        <i class="fas fa-exclamation-triangle"></i> No se pudo cargar el video. Asegurate de tener conexión a internet y que el video permita inserción.
      </div>
    `;
  } else if (post.image) {
    mediaInside = `<img src="${post.image}" alt="${post.title}" style="width:100%; border-radius: 24px; margin: 1rem 0;">`;
  }
  modalBody.innerHTML = `
    <h3 style="font-family:'Playfair Display';">${post.title}</h3>
    <div class="post-meta" style="color:var(--text-secondary); margin-bottom:1rem;"><i class="far fa-calendar-alt"></i> ${post.date}</div>
    ${mediaInside}
    <div>${post.content}</div>
  `;
  modal.style.display = "flex";
  
  // Detectar fallo del iframe (opcional)
  if (post.videoId) {
    const iframe = modalBody.querySelector("iframe");
    if (iframe) {
      iframe.onerror = () => {
        const fallback = document.getElementById("videoFallbackMsg");
        if (fallback) fallback.style.display = "block";
      };
    }
  }
}

closeModal.addEventListener("click", () => { modal.style.display = "none"; });
window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

function applyFilter(filter) {
  currentFilter = filter;
  currentPage = 1;
  if (filter === "all") filteredPosts = [...articlesData];
  else filteredPosts = articlesData.filter(post => post.category === filter);
  renderPosts();
}
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilter(btn.getAttribute("data-filter"));
  });
});

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    renderPosts();
  });
}

function updateCuriosity(index) {
  const item = curiositiesDB[index % curiositiesDB.length];
  curiosityTextEl.innerText = item.text;
  curiosityAuthor.innerText = `— ${item.source}`;
  curiosityIndexSpan.innerText = `${index+1}/${curiositiesDB.length}`;
}
prevCuriosity.addEventListener("click", () => {
  currentCuriosityIndex = (currentCuriosityIndex - 1 + curiositiesDB.length) % curiositiesDB.length;
  updateCuriosity(currentCuriosityIndex);
});
nextCuriosity.addEventListener("click", () => {
  currentCuriosityIndex = (currentCuriosityIndex + 1) % curiositiesDB.length;
  updateCuriosity(currentCuriosityIndex);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) scrollTopBtn.classList.add("visible");
  else scrollTopBtn.classList.remove("visible");
});
scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

function init() {
  initDarkMode();
  applyFilter("all");
  updateCuriosity(0);
  currentCuriosityIndex = 0;
}
init();

document.getElementById("modalContactBtn")?.addEventListener("click", () => {
  window.open("https://wa.me/5493874433296?text=Hola%20Mara%2C%20leo%20tu%20blog%20y%20me%20interesa%20consultarte", "_blank");
});