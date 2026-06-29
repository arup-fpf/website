/* shared red-facade behaviors (inner pages) — no loader, native nav, click-to-open menu */
(function(){
  /* reveal-on-scroll */
  window.addEventListener('load',function(){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });},{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  });
  /* safety: if a stale wipe overlay exists, force it hidden so it can never block the page */
  var w=document.getElementById('wipe');
  if(w){ w.classList.remove('show'); w.classList.remove('in'); w.style.opacity='0'; w.style.pointerEvents='none'; }

  /* cursor */
  var dot=document.getElementById('cursor-dot'), ring=document.getElementById('cursor-ring');
  if(dot){ var rx=0,ry=0,mx=0,my=0;
    function darkAt(x,y){ var el=document.elementFromPoint(x,y); if(!el) return false; var n=el;
      while(n&&n!==document.body){ if(n.id==='navTopbar'||(n.closest&&n.closest('#navTopbar'))) return false; if(n.id==='bottom-nav') return true; n=n.parentElement; } return false; }
    addEventListener('mousemove',function(e){ mx=e.clientX;my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px';
      document.body.classList.toggle('cur-on-dark', darkAt(mx,my)); });
    (function loop(){ rx+=(mx-rx)*.18; ry+=(my-ry)*.18; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
    document.querySelectorAll('a,button,input,textarea,select,[data-hover]').forEach(function(el){
      el.addEventListener('mouseenter',function(){document.body.classList.add('cur-hover');});
      el.addEventListener('mouseleave',function(){document.body.classList.remove('cur-hover');});
    });
  }

  /* ── BOTTOM NAV ──
     collapsed: clicking the black bar OPENS it (first click).
     opened: listed links navigate natively; top logo CLOSES it back to the bar. */
  var nav=document.getElementById('bottom-nav');
  if(nav){
    var barRow=nav.querySelector('.bar-row');
    var topbar=document.getElementById('navTopbar');
    barRow.addEventListener('click',function(e){
      if(!nav.classList.contains('open')){ e.preventDefault(); e.stopPropagation(); nav.classList.add('open'); }
    });
    if(topbar){ topbar.addEventListener('click',function(e){ e.preventDefault(); e.stopPropagation(); nav.classList.remove('open'); }); }
  }
})();
