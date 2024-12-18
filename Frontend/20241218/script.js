const boxes = document.querySelectorAll('.box');  
    boxes.forEach(box => {
        
        let szavazas = parseInt(box.getAttribute('data-value'), 10);   

        box.addEventListener('click', () => {      
           
        szavazas += 1;      
        box.setAttribute('data-value', szavazas);      
        box.textContent = `${szavazas} szavazás `;

      });
    });