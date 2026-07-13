const projectImages = { ceramic: 6, empire: 6, wild: 9 };
const labels = { ceramic: 'Ceramic Homes SEO result', empire: 'Empire Window Furnishings SEO result', wild: 'Wild Track SEO result' };
Object.entries(projectImages).forEach(([name, count]) => { const gallery = document.querySelector(`[data-gallery="${name}"]`); for (let i = 1; i <= count; i++) { const n = String(i).padStart(2, '0'); const figure = document.createElement('figure'); figure.innerHTML = `<img loading="lazy" src="assets/images/${name}-${n}.jpg" alt="${labels[name]} page ${i}"><figcaption>${labels[name]} — page ${i}</figcaption>`; gallery.appendChild(figure); } });

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target) } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const menu = document.querySelector('.menu-btn'), nav = document.querySelector('.nav-links'); menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open) }); nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();
const glow = document.querySelector('.cursor-glow'); window.addEventListener('pointermove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px' });

const lightbox = document.querySelector('.lightbox'), lbImg = lightbox.querySelector('img'), lbText = lightbox.querySelector('p'); let currentList = [], currentIndex = 0;
function openLightbox(img) { currentList = [...img.closest('.gallery').querySelectorAll('img')]; currentIndex = currentList.indexOf(img); showLightbox(); lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden' }
function showLightbox() { const img = currentList[currentIndex]; lbImg.src = img.src; lbText.textContent = img.alt }
function closeLightbox() { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '' }
document.addEventListener('click', e => { if (e.target.matches('.gallery img')) openLightbox(e.target) }); lightbox.querySelector('.lightbox-close').onclick = closeLightbox; lightbox.querySelector('.lightbox-prev').onclick = () => { currentIndex = (currentIndex - 1 + currentList.length) % currentList.length; showLightbox() }; lightbox.querySelector('.lightbox-next').onclick = () => { currentIndex = (currentIndex + 1) % currentList.length; showLightbox() }; lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox() }); document.addEventListener('keydown', e => { if (!lightbox.classList.contains('open')) return; if (e.key === 'Escape') closeLightbox(); if (e.key === 'ArrowRight') lightbox.querySelector('.lightbox-next').click(); if (e.key === 'ArrowLeft') lightbox.querySelector('.lightbox-prev').click() });
