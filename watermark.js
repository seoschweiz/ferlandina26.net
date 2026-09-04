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
});
