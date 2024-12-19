document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    
    let szavazas = parseInt(box.getAttribute('data-value'));
    szavazas += 1;
    box.setAttribute('data-value', szavazas);

    
    const span = box.querySelector('span');
    span.textContent = szavazas + ' szavazás';
  });
});


