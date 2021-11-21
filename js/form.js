document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  
  let telefono = "+525540428175";

  let cliente = document.querySelector("#cliente").value;
  let fecha = document.querySelector("#fecha").value;

  let producto = document.querySelector("#producto").value;
  let cantidad = document.querySelector("#cantidad").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_CocaCola Anita_*%0A
		*Pedido*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*Indica la fecha de tu reserva*%0A
		${fecha}%0A
		*Producto:*%0A
	
		${producto}%0A
		*¿Cantidad?*%0A
		${cantidad}`;

  if (cliente === "" || fecha === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
