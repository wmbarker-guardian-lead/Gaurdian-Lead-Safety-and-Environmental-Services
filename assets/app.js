let closeTimeout;

document.querySelectorAll('nav li.has-sub').forEach(li=>{
  li.addEventListener('mouseenter',()=>{
    clearTimeout(closeTimeout);
    document.querySelectorAll('nav li.has-sub').forEach(o=>o.classList.remove('open'));
    li.classList.add('open');
  });
  li.addEventListener('mouseleave',()=>{
    closeTimeout=setTimeout(()=>li.classList.remove('open'),200);
  });
});

document.addEventListener('click',e=>{
  if(!e.target.closest('nav')){
    document.querySelectorAll('nav li.has-sub').forEach(li=>li.classList.remove('open'));
  }
});

const y=document.getElementById('year');
if(y)y.textContent=new Date().getFullYear();
