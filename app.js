const peliculas = ['jurasic park', 'el padrino','forest gump','top gun'];
let nombre = prompt('ingrese el nombre de la pelicula que quiere ver');
if (peliculas.includes(nombre)){
    alert('la pelicula esta en cartelera');
} else alert('no esta en cartelera');
