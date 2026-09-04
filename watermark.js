document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("main img").forEach(img=>{
    if(img.id==="gallery-lightbox-image"||img.closest(".f26-photo-wrap")||img.hasAttribute("data-no-watermark"))return;
    const wrap=document.createElement("span");
    wrap.className="f26-photo-wrap";
    img.parentNode.insertBefore(wrap,img);
    wrap.appendChild(img);
  });

  if(!document.querySelector(".whatsapp-share-button")){
    const labels={es:"Compartir",ca:"Comparteix",en:"Share",fr:"Partager",it:"Condividi"};
    const language=(document.documentElement.lang||"es").toLowerCase().split("-")[0];
    const label=labels[language]||labels.es;
    const shareText=`${document.title}\n${window.location.href}`;
    const button=document.createElement("a");
    button.className="whatsapp-share-button";
    button.href=`https://wa.me/?text=${encodeURIComponent(shareText)}`;
    button.target="_blank";
    button.rel="noopener noreferrer nofollow";
    button.setAttribute("aria-label",`${label} en WhatsApp`);
    button.innerHTML='<svg aria-hidden="true" viewBox="0 0 32 32"><path fill="currentColor" d="M19.11 17.55c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.97 2.62 1.1 2.8c.14.18 1.91 2.91 4.62 4.08.65.28 1.15.45 1.54.57.65.21 1.23.18 1.7.11.52-.08 1.6-.66 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.12-.25-.18-.52-.32M16.03 26.67h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.05 1.06 1.08-3.95-.25-.41a10.68 10.68 0 1 1 9.07 5.02m9.1-19.79A12.78 12.78 0 0 0 4.99 22.28L3.18 28.9l6.77-1.78A12.77 12.77 0 0 0 28.81 15.9c0-3.41-1.31-6.61-3.69-9.02"/></svg><span>'+label+'</span>';
    document.body.appendChild(button);
  }

  if(!document.querySelector(".native-share-button")){
    const labels={es:"Más opciones",ca:"Més opcions",en:"More options",fr:"Plus d’options",it:"Altre opzioni"};
    const copied={es:"Enlace copiado",ca:"Enllaç copiat",en:"Link copied",fr:"Lien copié",it:"Link copiato"};
    const language=(document.documentElement.lang||"es").toLowerCase().split("-")[0];
    const label=labels[language]||labels.es;
    const button=document.createElement("button");
    button.className="native-share-button";
    button.type="button";
    button.setAttribute("aria-label",label);
    button.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.1 3.1 0 0 0 0-1.39l7.05-4.11A3 3 0 1 0 15 5c0 .23.03.46.08.67L8.03 9.78a3 3 0 1 0 0 4.44l7.12 4.16c-.05.2-.07.41-.07.62A2.92 2.92 0 1 0 18 16.08Z"/></svg><span>'+label+'</span>';
    button.addEventListener("click",async()=>{
      const data={title:document.title,text:document.title,url:window.location.href};
      try{
        if(navigator.share){await navigator.share(data);return;}
        await navigator.clipboard.writeText(`${document.title}\n${window.location.href}`);
        const span=button.querySelector("span");
        const original=span.textContent;
        span.textContent=copied[language]||copied.es;
        window.setTimeout(()=>{span.textContent=original},1800);
      }catch(error){if(error&&error.name!=="AbortError")window.location.href=`mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(window.location.href)}`;}
    });
    document.body.appendChild(button);
  }

  const footer=document.querySelector("footer .footer-inner")||document.querySelector("footer");
  if(footer&&!footer.querySelector(".instagram-profile-link")){
    const labels={es:"Síguenos en Instagram",ca:"Segueix-nos a Instagram",en:"Follow us on Instagram",fr:"Suivez-nous sur Instagram",it:"Seguici su Instagram"};
    const language=(document.documentElement.lang||"es").toLowerCase().split("-")[0];
    const link=document.createElement("a");
    link.className="instagram-profile-link";
    link.href="https://www.instagram.com/ferlandina26/";
    link.target="_blank";
    link.rel="noopener noreferrer";
    link.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg><span>'+(labels[language]||labels.es)+'</span>';
    footer.appendChild(link);
  }
});
