const menu=document.querySelector('.menu');const nav=document.querySelector('nav');if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'))}
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.product').forEach(p=>p.classList.toggle('hidden',f!=='all'&&p.dataset.type!==f))}));
const lightbox=document.querySelector('#lightbox');const lightImg=document.querySelector('#lightbox-img');const lightTitle=document.querySelector('#lightbox-title');document.querySelectorAll('.image-btn').forEach(btn=>btn.addEventListener('click',()=>{lightImg.src=btn.dataset.image;lightImg.alt=btn.dataset.title;lightTitle.textContent=btn.dataset.title;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));function closeBox(){if(lightbox){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightImg.src=''}}document.querySelector('.close-lightbox')?.addEventListener('click',closeBox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeBox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
document.querySelectorAll('.social-share').forEach(btn=>btn.addEventListener('click',async()=>{
 const d={title:'THREADLY — Premium Polos',text:'Check out THREADLY premium polos 👕',url:location.href};
 if(navigator.share){try{await navigator.share(d)}catch(e){}}
 else window.open('https://wa.me/?text='+encodeURIComponent(d.text+' '+d.url),'_blank');
});
document.querySelectorAll('.facebook-share').forEach(btn=>btn.addEventListener('click',()=>{
 window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'_blank','width=700,height=600');
}));
