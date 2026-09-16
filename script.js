const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const header=document.getElementById('site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav a[href^="#"]')];
const setActive=()=>{const y=window.scrollY+140;let current='home';for(const s of sections){if(s.offsetTop<=y)current=s.id}navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))};
window.addEventListener('scroll',setActive,{passive:true});setActive();
