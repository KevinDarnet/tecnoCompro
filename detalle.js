const cartas = [];
function getData() {
  cartas.push(...productos.arrayProductos);
  console.log(cartas);
}
getData();

//Funcion donde se imprime la card de detalle
function mainDetalle() {
  console.log(location);

  var idCarta = location.search.split("?id=").join("");
  console.log(idCarta);

  var carta = cartas.filter((carta) => carta.id == idCarta)[0];
  console.log(carta);

  var estructuraCarta = `    
    <h1>DETALES</h1>
    <div>
      <div> 
          <img src="${carta.image}"/>
      </div>
        <p>name: ${carta.name}</p>
        <p>description: ${carta.description}</p>
        <p>category: ${carta.category}</p>
        <p>price: ${carta.price}</p>
        <div><a href="index.html">Volver a Home</a></div>
    </div>
    `;
  document.querySelector("#carta").innerHTML = estructuraCarta;
}
mainDetalle();
