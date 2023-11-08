const contenedor = document.querySelector('.container');
constmain = document.getElementById

function getImage (e){
    const image = e.target.getAttribute('src');
    main.src = image;
}

contenedor.addEventListener('click', getImage);