// Menú hamburguesa (solo en pantallas angostas)
(function(){
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const btn = nav.querySelector('.nav-toggle');
  const panel = nav.querySelector('.nav-panel');
  function set(open){
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    if (open) { const first = panel.querySelector('a'); if (first) setTimeout(() => first.focus({preventScroll:true}), 350); }
  }
  btn.addEventListener('click', () => set(!nav.classList.contains('open')));
  panel.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { set(false); btn.focus(); } });
  matchMedia('(min-width:701px)').addEventListener('change', e => { if (e.matches) set(false); });
})();
